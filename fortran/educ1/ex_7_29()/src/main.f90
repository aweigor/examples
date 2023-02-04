program exercise_7_29
   use Environment

   implicit none
   character(*), parameter          :: output_file = "./bin/output.txt", fmt = "f5.1"
   real(R_), allocatable            :: A(:,:), B(:,:)
   integer(I_)                      :: In = 0, Out = 0, M=0, N=0, i
   integer(I_), allocatable         :: map(:)

   open (file="./data/input.txt", newunit=In)
      read (In, '(2i3)') M, N
      allocate(A( M,N ))
      allocate(B( M,N ))
      allocate(map( M ))
      call readMatrix("./data/matrix.txt",M,N,fmt,A)
   close (In)

   open (file=output_file, encoding=E_, newunit=Out)
      write (Out, *) 'исходная матрица:'
      write (Out, '('//N//fmt//')') (A(i, :), i = 1, M)
   close (Out)

   map = orderMap(A(:,1),M)
   B = reorderedMatrix(A,M,N,map)

   open (file=output_file, encoding=E_, newunit=Out, position='append')
      write (Out, *) 'сортированная матрица:'
      write (Out, '('//N//fmt//')') (B(i, :), i = 1, M)
      write (Out, *) 'прежние индексы:', map(:)
      print *, map(:)
   close (Out)

   contains
      function reorderedMatrix(matrix,M,N,map) result (sorted)
         integer(I_)  :: M, N, map(M)
         real(R_) :: matrix(:,:)
         real(R_), allocatable :: sorted(:,:)

         allocate(sorted(M,N))

         do i=1, M
            sorted(i,:) = matrix(map(i),:)
         end do
      end function reorderedMatrix

      function orderMap(arr,size) result (map)
         integer(I_)    :: size
         integer(I_)    :: map(size)
         real(R_)       :: arr(size)
         logical        :: mask(size)
         integer i, mloc(1)

         map = (/ (i,i=1,size) /)
         mask = (/ (.true.,i=1,size) /)

         do i=1, size
            mloc = minloc(arr,1,mask)
            mask(mloc(1)) = .false.
            map(i) = mloc(1)
         end do
      end function orderMap


end program exercise_7_29