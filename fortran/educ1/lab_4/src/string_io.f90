module String_IO
   use Environment

   implicit none

   type symbol
      character(1, kind=CH_)    :: char
      type(symbol), pointer     :: next => Null()
      type(symbol), pointer     :: prev => Null()
   end type symbol

   type list
      type(symbol), pointer     :: head => Null()
      type(symbol), pointer     :: tail => Null()
      integer size
   end type list


contains
   function readStringList (Input_File) result (DLList)
      type(list), pointer     :: DLList
      character(*), intent(in)   :: Input_File
      integer  In

      allocate(DLList)
      open (file=Input_File, encoding=E_, newunit=In)
         DLList%tail => pushStream(In,DLList%tail)
         DLList%head => getHead(DLList%tail)
      close (In)
   end function readStringList

   recursive function getHead(current) result (node)
      type(symbol), pointer   :: node, current

      if (associated(current%prev)) then
         node => getHead(current%prev)
      else
         node => current
      end if
   end function getHead

   recursive function pushStream (In,tail) result (node)
      type(symbol), pointer   :: node, tail
      integer, intent(in)     :: In

      integer  IO
         
      allocate (node)
      read (In, '(a1)', iostat=IO, advance='no') node%char
         print *, node%char
         call Handle_IO_status(IO, "reading symbol from file")
      if (IO == 0) then
         node%next => Null()
         node%prev => tail

         if (associated(tail)) then
            tail%next => node
         end if

         tail => pushStream(In, node)
      else
         deallocate (node)
         nullify (node)
      end if
   end function pushStream

   recursive subroutine traverseList (current)
      type(symbol), pointer   :: current
      type(symbol)   :: temp

      print *, current%char
      if (associated(current%next)) then
         call traverseList(current%next)
      end if

   end subroutine traverseList

   recursive subroutine traverseBackList (current)
      type(symbol), pointer   :: current
      type(symbol)   :: temp

      print *, current%char
      if (associated(current%prev)) then
         call traverseList(current%prev)
      end if

   end subroutine traverseBackList
   
end module String_IO 
