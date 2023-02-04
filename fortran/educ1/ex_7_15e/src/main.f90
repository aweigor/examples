program exercise_7_15e
   use Environment

   implicit none
   character(*), parameter          :: output_file = "./bin/output.txt", fmt="f5.1"
   integer(I_)                      :: M = 0, N = 0, In = 0, Out = 0
   real(R_), allocatable            :: A(:,:), sumVector(:), X
   integer i, S(1), D(1)

   open (file="./data/input.txt", newunit=In)
      read (In, '(2i3)') M, N
      allocate(A( M,N ))
      allocate(sumVector(M))
      call readMatrix("./data/matrix.txt",M,N,fmt,A)
   close (In)

   !массив сумм столбцов (строки)
   do i = 1, M
      sumVector(i) = sum(A(i,:))
   end do

   !минимальное значение столбца в строке с минимальной суммой
   S = minloc(sumVector)
   D = minloc(A(S(1),:))
   X = A(S(1),D(1))

   open (file=output_file, encoding=E_, newunit=Out)
      write (Out, *) 'исходная матрица:'
      write (Out, '('//N//fmt//')') (A(i, :), i = 1, M)
      write (Out, *) 'искомый элемент:', X
      write (Out, *) 'место искомого элемента:', S, D
   close (Out)

   print *, X

end program exercise_7_15e