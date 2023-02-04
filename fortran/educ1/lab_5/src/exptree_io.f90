module Exptree_IO
   use Environment
   use Exptree_Stack

   implicit none

contains

   function read_expression (input_file) result (postfix_expression)
   !чтение из файла, запись в массив
      character(256, kind=CH_)            :: buffer
      character(:,kind=CH_), allocatable  :: temp
      character(1, kind=CH_), allocatable :: postfix_expression(:)
      character(*), intent(in)            :: Input_File
      integer size,i,In

      open (file=Input_File, encoding=E_, newunit=In)
         
         read (In,'(a)') buffer
         temp = trim(adjustl(buffer))
         size = len_trim(temp)

         allocate(postfix_expression(size))
         postfix_expression(:) = (/ (temp(i:i),i=1,size) /)
         
      close(In)

   end function read_expression

   recursive subroutine print_infix (t)
   !печать в инфиксной нотации

      type (node_t), pointer :: t

      if (associated (t)) then
         call print_infix (t % left)
         print *, t % value
         call print_infix (t % right)
      end if

   end subroutine print_infix

   recursive subroutine print_postfix (t)
   ! печать в постфиксной нотации

      type (node_t), pointer :: t

      if (associated (t)) then
         call print_postfix (t % left)
         call print_postfix (t % right)
         print *, t % value
      end if

   end subroutine print_postfix

   recursive subroutine print_prefix (t)
   ! печать в постфиксной нотации

      type (node_t), pointer :: t

      if (associated (t)) then
         print *, t % value
         call print_prefix (t % left)
         call print_prefix (t % right)
         
      end if

   end subroutine print_prefix
   
end module Exptree_IO 
