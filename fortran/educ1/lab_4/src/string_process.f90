module String_Process

   use Environment
   use String_IO

   implicit none

contains
   subroutine convertPolish( expList )
      type(list), intent(inout)          :: expList
      character(1, kind=CH_)    :: opCollection(4)
      integer  :: level = 0
      opCollection = (/'-','+','/','*'/)

      call traverse1(expList%tail,opCollection,level)
      expList%head => getHead(expList%tail)
   end subroutine convertPolish

   recursive subroutine traverse1 (current,opCollection,level)
      type(symbol),pointer   :: current
      character(1, kind=CH_)    :: opCollection(:)
      character(1, kind=CH_) :: bracketOpen=')',bracketClose='('
      integer  :: level
      logical  :: bracketFlag, deleteFlag
      bracketFlag = level.gt.0
      deleteFlag = .false.

      if (associated(current%prev)) then
         if (any(opCollection.eq.current%char)) then
            call convert(current,opCollection,bracketFlag)
         end if
         
         if (current%char.eq.bracketOpen) then
            level = level+1
            call deleteNode(current)
            deleteFlag = .true.
         end if
         if (current%char.eq.bracketClose) then
            level = level-1
            call deleteNode(current)
            deleteFlag = .true.
         end if
         !print*, current%next%char
         if (associated(current%prev)) then
            if (deleteFlag) then
               call traverse1(current,opCollection,level)
            else
               call traverse1(current%prev,opCollection,level)
            end if
         end if
      end if
   end subroutine traverse1

   recursive subroutine convert ( current,opCollection,bracketFlag )
      type(symbol),pointer   :: current, tmp
      character(1, kind=CH_) :: opCollection(:)
      character(1, kind=CH_) :: bracket='('
      logical                :: bracketFlag
      

      if (associated(current%prev)) then
         if (any(opCollection.eq.current%char)) then
            if (any(opCollection.eq.current%prev%char)) then
               if(associated(current%prev%prev)) then
                  if(.not.any(opCollection.eq.current%prev%prev%char)) then
                     if (.not.bracketFlag.or.(.not.(current%prev%prev%char.eq.bracket))) then
                        !swap
                        allocate(tmp)
                        tmp => current%prev%prev
                        current%prev%prev => current
                        current%prev%next => current%next
                        current%next%prev => current%prev
                        current%prev%next => current
                        current%prev%prev => tmp
                        !end swap
                     end if
                  end if
               end if
            else
               if (.not.bracketFlag.or.(.not.(current%prev%char.eq.bracket))) then
                  !swap
                  allocate(tmp)
                  tmp => current%prev%prev
                  current%prev%prev => current
                  current%prev%next => current%next
                  current%next%prev => current%prev
                  current%prev%next => current
                  current%prev%prev => tmp
                  !end swap
               end if
            end if
         end if
         current%prev%next => current
         call convert(current%prev,opCollection,bracketFlag)
      end if
      !print *,'convert endede'
   end subroutine convert

   subroutine deleteNode (current)
      type(symbol),pointer   :: current,tmp
      allocate(tmp)
      tmp => current

      if (.not.associated(current%next)) then
         !last
         if (associated(current%prev)) then
            current%prev%next => Null()
         end if
      else if (.not.associated(current%prev)) then
         !first
         if (associated(current%next)) then
            current%next%prev => Null()
         end if
      else
         current%prev%next => current%next
         current%next%prev => current%prev
      end if
      deallocate(tmp)
      
   end subroutine deleteNode

end module String_process