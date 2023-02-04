   subroutine btree_append_data( btree, data, right )
      type(BINARY_TREE), pointer  :: btree
      type(TREE_DATA), intent(in) :: data
      logical, intent(in)        :: right

      type(BINARY_TREE), pointer :: new

      if ( right .and. associated(btree%right) ) then
         return
      endif
      if ( .not. right .and. associated(btree%left) ) then
         return
      endif

      call btree_create(new, data )

      if ( right ) then
         btree%right => new
      else
         btree%left  => new
      endif
   end subroutine btree_append_data

   ! btree_append_subtree
   !     Append a new subtree (left or right) if
   !     possible. Otherwise nothing is done
   ! Arguments:
   !     btree      Some node in the tree
   !     subtree    Subtree to be appended
   !     right      Append right or left
   !
   subroutine btree_append_subtree( btree, subtree, right )
      type(BINARY_TREE), pointer  :: btree
      type(BINARY_TREE), pointer  :: subtree
      logical, intent(in)        :: right

      if ( right .and. associated(btree%right) ) then
         return
      endif
      if ( .not. right .and. associated(btree%left) ) then
         return
      endif

      if ( right ) then
         btree%right => subtree
      else
         btree%left  => subtree
      endif
   end subroutine btree_append_subtree

   recursive subroutine append_node (t, value)
      !добавляет ветвь

      type (node), pointer :: t  
      character(1, kind=CH_)    :: value

      ! If (sub)tree is empty, put number at root
      if (.not. associated (t)) then
         allocate (t)
         t % value = value
         nullify (t % left)
         nullify (t % right)
      ! Otherwise, insert into correct subtree
      else if (number < t % value) then
         call append_node (t % left, number)
      else
         call append_node (t % right, number)
      end if

   end subroutine append_node