module String_Process

   use Environment
   use String_IO

   implicit none

contains

   pure recursive subroutine trimList ( current,mask )
      type(symbol_t), pointer, intent(inout)          :: current
      character(:,kind=CH_), allocatable, intent(in)  :: mask(:)
      type(symbol_t), pointer                         :: tmp

      if (any(mask.eq.current%char)) then
         tmp => current
         current => tmp%next
         deallocate (tmp)
      end if
      
      if (associated(current%next)) then
         call trimList(current%next,mask)
      end if
   end subroutine trimList

   pure recursive subroutine trimVect ( vect,current )
      character(1,kind=CH_), allocatable, intent(inout) :: vect(:)
      type(symbol_t), pointer                           :: current
      logical                                           :: mask(size(vect))
      integer i
      
      if (any(vect.eq.current%char)) then
         do i = 1, size(mask)
            mask(i) = .not.vect(i).eq.current%char
         end do
         vect = pack(vect, mask)
      end if

      if (associated(current%next)) then
         call trimVect( vect,current%next )
      end if
   end subroutine trimVect

end module String_process