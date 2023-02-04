module matrix_tools
   use Environment

   implicit none
   integer, parameter      :: N = 100
   real(R_), parameter     :: a = 0, b = 1, h = (b - a) / N

contains
   ! определить координаты максимального элемента матрицы
   function find_max(matrix, M, N ) result (matEl)

      integer(I_), intent(in)    :: M, N
      real(R_), intent(in)       :: matrix(M,N)
      integer(I_)                :: matEl(2)
      real(R_)                   :: max
      integer                    :: i, j

      max=matrix(1,1)
      do i=1, M
         do j=1,N
            if (matrix(i,j) > max) then 
               max = matrix(i,j)
               matEl(1)=i
               matEl(2)=j
            end if
         end do
      end do

   end function find_max

   ! определить координаты минимального элемента матрицы
   function find_min(matrix, M, N) result (matEl)

      integer(I_), intent(in)    :: M, N
      real(R_), intent(in)       :: matrix(M,N)
      integer(I_)                :: matEl(2)
      real(R_)                   :: min
      integer                    :: i, j

      min=matrix(1,1)
      do i=1, M
         do j=1,N
            if (matrix(i,j) < min) then 
               min = matrix(i,j)
               matEl(1)=i
               matEl(2)=j
            end if
         end do
      end do

   end function find_min


end module matrix_tools 
