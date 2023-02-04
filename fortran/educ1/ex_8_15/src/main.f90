program exercise_8_15
   use Environment
   use matrix_tools
   
   implicit none
   character(*), parameter :: output_file = "output.txt", fmt = "f5.1"
   integer(I_)   :: In = 0, Out = 0, min1(2), min2(2)
   real(R_), allocatable   :: A1(:,:), A2(:,:)
   integer                 :: M1 = 0, M2 = 0, N1 = 0, N2 = 0, i

   open (file="./data/input.txt", newunit=In)
      read (In, '(2i2)') M1, N1
      read (In, '(2i2)') M2, N2
      allocate(A1(M1,N1))
      allocate(A2(M2,N2))
      call readMatrix("./data/matrix1.txt",M1,N1,fmt,A1)
      call readMatrix("./data/matrix2.txt",M2,N2,fmt,A2)
   close (In)

   min1 = find_min(A1,M1,N1)
   min2 = find_min(A2,M2,N2)

   open (file=output_file, encoding=E_, newunit=Out)
      write (Out, *) 'исходная матрица 1:'
      write (Out, '('//N1//fmt//')') (A1(i, :), i = 1, M1)

      write (Out, *) 'исходная матрица 2:'
      write (Out, '('//N2//fmt//')') (A2(i, :), i = 1, M2)

      write (Out, *) 'строка и столбец минимального элемента в первой матрице:'
      write (Out, '(2i3)') min1

      write (Out, *) 'строка и столбец минимального элемента во второй матрице:'
      write (Out, '(2i3)') min2

      if (min1(1) == min2(1)) then
         write (Out, *) 'Строки совпадают'
         print *, 'Строки совпадают'
      else
         write (Out, *) 'Строки не совпадают'
         print *, 'Строки не совпадают'
      end if
   close (Out)

end program exercise_8_15
