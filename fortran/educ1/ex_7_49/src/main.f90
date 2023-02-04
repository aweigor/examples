program exercise_7_49
   use Environment

   implicit none
   character(*), parameter          :: output_file = "./bin/output.txt", fmt = "f5.1"
   integer(I_)                      :: In = 0, Out = 0, M=0, N=0, i, max(2)
   real(R_), allocatable            :: B(:,:), C(:,:)

   open (file="./data/input.txt", newunit=In)
      read (In, '(2i3)') M, N
      allocate(B(M,N))
      allocate(C(M-1,N-1))
      call readMatrix("./data/matrix.txt",M,N,fmt,B)
   close (In)

   max = maxloc(B)
   C = reshapeMatrix(B,M,N,max)

   open (file=output_file, encoding=E_, newunit=Out)
      write (Out, *) 'исходная матрица:'
      write (Out, '('//N//fmt//')') (B(i, :), i = 1, M)

      write (Out, *) 'строка максимального элемента:' // max(1)
      write (Out, *) 'столбец максимального элемента:' // max(2)

      write (Out, *) 'результирующая матрица:'
      write (Out, '('//N-1//fmt//')') (C(i, :), i = 1, M-1)
   close (Out)

contains
   pure function reshapeMatrix(B,M,N,max) result(C)
      integer(I_), intent(in)  :: M, N, max(2)
      real(R_), intent(in)  :: B(:,:)
      real(R_) :: C(M-1,N-1)
      logical               :: mask(M,N)

      mask(:,:) = .false.
      mask(:max(1)-1,:max(2)-1) = .true.
      mask(:max(1)-1,max(2)+1:) = .true.
      mask(max(1)+1:,:max(2)-1) = .true.
      mask(max(1)+1:,max(2)+1:) = .true.

      C = Reshape(Pack(B, mask),[M-1,N-1])

   end function reshapeMatrix
      
end program exercise_7_49