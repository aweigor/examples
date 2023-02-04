program lab_5  
   use Environment
   use Exptree_IO
   use Exptree_Process
   use Exptree_Stack

   implicit none
   
   character(:), allocatable            :: input_file, output_file
   character(1, kind=CH_), allocatable  :: postfix_expression(:)
   logical isValid

   type(stack_t), allocatable                   :: stack
   type (conversion_stack_t),allocatable        :: conversion_stack
   type(node_t), pointer                        :: expression_tree

   allocate(stack)
   allocate(conversion_stack)
   
   output_file = "output.txt"
   input_file = './data/file.txt'

   postfix_expression = read_expression(input_file)
   isValid = validate_expression_vect(postfix_expression)

   if (isValid) then

      expression_tree => construct_tree(stack,postfix_expression)

      call convert_prefix(expression_tree,conversion_stack)
      call print_prefix(expression_tree)

   end if


end program lab_5