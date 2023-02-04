module Exptree_Stack

    use Environment

    implicit none

    type element_t
        type(node_t), pointer :: val => Null()
        type(element_t), pointer :: prev => Null()
    end type element_t

    type stack_t
        type(element_t), pointer :: last => Null()
        integer :: size = 0
    end type stack_t

    type node_t
        character(1, kind=CH_)    :: value
        type(node_t), pointer     :: left => Null()
        type(node_t), pointer     :: right => Null()
    end type node_t

    type conversion_element_t
        character(:, kind=CH_), allocatable    :: val
        type(conversion_element_t), pointer :: prev => Null()
    end type conversion_element_t

    type conversion_stack_t
        type(conversion_element_t), pointer :: last => Null()
        integer :: size = 0
   end type conversion_stack_t

contains

    subroutine push ( node, stack )
        type(node_t), pointer           :: node
        type(stack_t), intent(inout)    :: stack
        type(element_t), pointer        :: current

        allocate(current)
        current%val => node
        current%prev => stack%last
        stack%last => current
        stack%size = stack%size+1

    end subroutine push

    subroutine pop ( stack, node )
        type(node_t), pointer, intent(out)   :: node
        type(stack_t), intent(inout)         :: stack
        type(element_t), pointer             :: last

        if (associated(stack%last)) then
            node => stack%last%val
            last => stack%last%prev
            deallocate(stack%last)
            stack%last => last
            stack%size = stack%size-1
        end if

    end subroutine pop

    subroutine conversion_push ( string, conversion_stack )
        character(:, kind=CH_),allocatable          :: string
        type(conversion_stack_t), intent(inout)    :: conversion_stack
        type(conversion_element_t), pointer        :: current

        allocate(current)
        current%val = string
        current%prev => conversion_stack%last
        conversion_stack%last => current
        conversion_stack%size = conversion_stack%size+1

    end subroutine conversion_push

    subroutine conversion_pop ( conversion_stack, string )
        character(:, kind=CH_),allocatable   :: string
        type(conversion_stack_t), intent(inout)         :: conversion_stack
        type(conversion_element_t), pointer             :: last

        if (associated(conversion_stack%last)) then
            string = conversion_stack%last%val
            
            last => conversion_stack%last%prev
            deallocate(conversion_stack%last)
            conversion_stack%last => last
            conversion_stack%size = conversion_stack%size-1
        end if

    end subroutine conversion_pop

    
end module Exptree_Stack