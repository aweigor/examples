! Copyright 2015 Fyodorov S. A.

program lab_1_2
   use Environment
!   use Structure

   implicit none
!   type(node), pointer   :: List => Null()
   integer iostat
   
   type node_t
      character(1, kind=CH_) :: symbol = ' '
      type(node_t), pointer :: next => null()
   end type node_t
   
   type(node_t), pointer   :: List => Null()
   character(:), allocatable  :: input_file, output_file, format
   integer :: i,j,k

   input_file = "./data/input.txt"
   output_file = "output.txt"

   open (file=input_file, encoding=E_, newunit=In)
      List => nodeFromStream(In)
   close (In)

   open (file=output_file, encoding=E_, newunit=Out)
      write (out, '(a)') "Исходная строка:"
   close (Out)
   
   print *, Associated(List%next%next%next)

   !print *, List(1)
   
   !List(1)%next => List(2)%next%data

   contains

      recursive function nodeFromStream (In) result (node)
         type(node_t), pointer   :: node
         integer, intent(in)     :: In
         integer  IO
         
         allocate (node)
         read (In, '(a1)', iostat=IO, advance='no') node%symbol
         call Handle_IO_status(IO, "reading symbol from file")
         if (IO == 0) then
            node%next => nodeFromStream(In)
         else
            deallocate (node)
            nullify (node)
         end if
      end function nodeFromStream


      subroutine iterator (List)
         type(node_t)  :: List(:)
      end subroutine iterator

      recursive function createList (i) result (next)
         integer, intent(inout)  :: i
         type(node_t), pointer  :: next

         allocate(next)
         
         if (i < 5) then
            next%data = i
            i = i + 1   
            next%next => createList(i)
         else
            deallocate(next)
         end if

      end function createList

end program lab_1_2
