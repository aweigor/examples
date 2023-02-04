program exercise_3_11
   use Environment
   
   implicit none
   character(*), parameter    :: input_file = "./data/input.txt", output_file = "./bin/output.txt", fmt = '(3f10.3)'
   integer                    :: In = 0, Out = 0, N = 0, M = 0, i = 0, j = 0
   real(R_), allocatable      :: M1(:, :), M2(:, :), MSUM(:, :)

   open (file=input_file, newunit=In)
      read (In, *) M, N
      allocate (M1(M, N))
      allocate (M2(M, N))
      allocate (MSUM(M, N))

      read (In, *) (M1(i, :), i = 1, M)
      read (In, *) (M2(i, :), i = 1, M)   
   close (In)

   do i = 1, M
      do j = 1, N
         MSUM(i, j) = M1(i, j) + M2(i, j)
      end do
   end do
   
   open (file=output_file, encoding=E_, newunit=Out)
      write (Out, '('//N//'f5.1)') (MSUM(i, :), i = 1, M)
   close (Out)

end program exercise_3_11