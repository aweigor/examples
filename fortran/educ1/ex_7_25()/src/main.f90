program exercise_7_25
   use Environment

   implicit none
   character(*), parameter                :: output_file = "./bin/output.txt", fmt="f5.1"
   integer(I_)                            :: M = 0, N = 0, j = 0, k = 0, In = 0, Out = 0
   real(R_), allocatable                  :: A(:,:)
   integer i

   open (file="./data/input.txt", newunit=In)
      read (In, '(2i3)') M, N
      allocate(A( M,N ))
      call readMatrix("./data/matrix.txt",M,N,fmt,A)
   close (In)

   open (file=output_file, encoding=E_, newunit=Out)
      write (Out, *) 'исходная матрица:'
      write (Out, '('//N//fmt//')') (A(i, :), i = 1, M)
   close (Out)

   call equalSearch(A,N,j,k)

   open (file=output_file, encoding=E_, newunit=Out, position='append')
      if (j < N) then
         write (Out, *) "совпадающие столбцы:" // k // " и " // j
      else
         write (Out, *) "совпадающих столбцов нет"
      end if
   close (Out)

   contains
      subroutine equalSearch (A,N,j,k)
         real(R_)                  :: A(:,:)
         integer(I_)               :: N, j, k

         ! поиск совпадающих столбцов
         search: do j = 1, N
            do k = j+1, N
               if (all( (A(:,j)) == (A(:,k)) )) exit search
            end do
         end do search
      end subroutine equalSearch

end program exercise_7_25