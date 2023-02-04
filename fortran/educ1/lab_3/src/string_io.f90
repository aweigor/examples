module String_IO
   use Environment

   implicit none

   ! Структура данных для хранения данных о студенте.
   type symbol_t
      character(1, kind=CH_)    :: char
      type(symbol_t), pointer     :: next => Null()
   end type symbol_t

contains
   function readStringList (Input_File) result (List)
      type(symbol_t), pointer     :: List
      character(*), intent(in)   :: Input_File
      integer  In

      open (file=Input_File, encoding=E_, newunit=In)
         List => nodesFromStream(In)
      close (In)
   end function readStringList


   recursive function nodesFromString (string, size, readpos) result (node)
      type(symbol_t), pointer   :: node
      character(1, kind=CH_), allocatable  :: string
      integer  IO, size, readpos

      allocate(node)
      node%char = string(readpos:readpos)
         
      if (readpos <= size) then
         readpos = readpos + 1
         node%next => nodesFromString(string, size, readpos)
      else
         deallocate (node)
         nullify (node)
      end if
         
   end function nodesFromString

   recursive function nodesFromStream (In) result (node)
      type(symbol_t), pointer   :: node
      integer, intent(in)     :: In

      integer  IO
         
      allocate (node)
      read (In, '(a1)', iostat=IO, advance='no') node%char
         print *, node%char
         call Handle_IO_status(IO, "reading symbol from file")
      if (IO == 0) then
         node%next => nodesFromStream(In)
      else
         deallocate (node)
         nullify (node)
      end if
   end function nodesFromStream

   function readStringVect (Input_File) result (Vector)
      character(256, kind=CH_)            :: buffer
      character(1,kind=CH_), allocatable  :: Vector(:)
      character(:,kind=CH_), allocatable  :: temp
      character(*), intent(in)   :: Input_File
      integer In,size,i

      open (file=Input_File, encoding=E_, newunit=In)
         
         read (In,'(a)') buffer
         temp = trim(adjustl(buffer))
         size = len_trim(temp)

         allocate(Vector(len_trim(temp)))
         Vector(:) = (/ (temp(i:i),i=1,size) /)
         
      close(In)
   end function readStringVect
   
end module String_IO 
