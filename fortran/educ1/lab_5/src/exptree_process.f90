module Exptree_Process

   use Environment
   use Exptree_IO
   use Exptree_Stack

   implicit none
contains

   function check_operator ( symbol ) result (isOperator)
      character(1, kind=CH_) :: symbol
      character(1, kind=CH_) :: opCollection(3) = (/ '+','-','*' /)
      logical isOperator

      isOperator = any(opCollection.eq.symbol)
   end function check_operator

   function create_node( value ) result (node)
      type(node_t), pointer     :: node
      character(1, kind=CH_)    :: value

      allocate(node)
      node%value = value
   end function create_node

   function validate_expression_vect (expr) result (isValid)
   ! проверка выражения на примере массива
   ! посчитать количество операторов и операндов - операндов должно быть меньше операторов на 1
   ! если первый элемент - оператор - выход с отрицательным результатом
   
      character(1, kind=CH_) :: expr(:)
      integer                :: count_optr=0,count_opnd=0,i
      logical isValid, isOperator

      isOperator = check_operator( expr(1) )
      if (isOperator) then
         isValid = .false.
         return
      end if

      do i = 1, size(expr)
         isOperator = check_operator( expr(i) )
         if (isOperator) then
            count_optr = count_optr + 1
         else
            count_opnd = count_opnd + 1
         end if
      end do

      isValid = (count_opnd-count_optr).eq.1

   end function validate_expression_vect

   recursive subroutine count_tree (t,count_optr,count_opnd)
   ! проверка выражения
   ! посчитать количество операторов и операндов - операндов должно быть меньше операторов на 1
      type (node_t), pointer     :: t
      integer count_optr,count_opnd
      logical isOperator
      
      if(associated(t)) then
         call count_tree (t % left,count_optr,count_opnd)
         call count_tree (t % right,count_optr,count_opnd)
         isOperator = check_operator( t % value )
         if (isOperator) then
            count_optr = count_optr + 1
         else
            count_opnd = count_opnd + 1
         end if
      end if
      
   end subroutine count_tree

   function validate_expression_tree (t) result (isValid)
      type (node_t), pointer     :: t
      integer  :: count_optr=0,count_opnd=0
      logical isValid

      call count_tree(t,count_optr,count_opnd)
      isValid = (count_opnd-count_optr).eq.1

   end function validate_expression_tree

   function construct_tree (stack,expression) result (tree)
   ! построить дерево
   ! если оператор - узел, если операнд - лист
   ! узел при создании получает два операнда из очереди

      type(node_t), pointer             :: node, left, right, tree
      type(stack_t)                     :: stack
      character(1, kind=CH_)            :: expression(:)
      logical isOperator
      integer i
      
      
      do i=1, size(expression)
         isOperator = check_operator( expression(i) )

         if (.not.isOperator) then
            node => create_node( expression(i) )
            call push( node,stack )
         else
            node => create_node( expression(i) )
            call pop( stack,right )
            call pop( stack,left )
            node%right => right
            node%left => left
            call push( node,stack )
         end if
      end do
      !результат - первая ветвь
      call pop ( stack,tree )

   end function construct_tree

   recursive subroutine convert_prefix (t,conversion_stack)
   ! конвертация из постфиксной нотации в префиксную
   ! считывать слева направо, если операнд - заполнять стэк, если оператор - доставать два операнда, создавать строку, и возвращать в стэк

      type (node_t), pointer     :: t
      type (conversion_stack_t)  :: conversion_stack
      character(:, kind=CH_), allocatable :: op1,op2,temp
      logical isOperator

      if (associated (t)) then
         call convert_prefix (t % left,conversion_stack)
         call convert_prefix (t % right,conversion_stack)
         isOperator = check_operator( t%value )
         if (isOperator) then
            call conversion_pop ( conversion_stack,op1 )
            call conversion_pop ( conversion_stack,op2 )
            temp = t%value // op2 // op1
         else
            temp = t%value
         end if
         call conversion_push( temp,conversion_stack )
      end if

   end subroutine convert_prefix
end module Exptree_Process