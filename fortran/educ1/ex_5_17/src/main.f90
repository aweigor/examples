subroutine initVectors(A, B, dim)
   use Environment

   integer(I_)                :: dim
   real(R_), dimension(dim)   :: A, B
         
   call random_number(A(:))
   call random_number(B(:))

   ! вопрос: можно ли форматировать значния в массиве, как?

   A(:) = A(:)*100
   B(:) = B(:)*100
end subroutine initVectors

program exercise_5_17
   use Environment

   implicit none
   character(*), parameter             :: output_file = "./bin/output.txt"
   integer(I_), parameter              :: dim = 10
   integer(1)                          :: In = 0, Out = 0
   integer(I_)                         :: i
   real(R_), dimension(dim)            :: A, B, R_sum, R_mul, R_div

   ! вопрос: как создать вызов с результатом и присвоить его, типа random_number = get_random_number()
   call initVectors(A, B, dim)
   R_sum(:) = A(:) - B(:)
   R_mul(:) = A(:) * B(:)
   R_div(:) = A(:) / B(:)
   
   ! вопрос: можно ли при печати прибавлять строку к результату, как?
   print *, A
   print *, B
   print *, R_sum
   print *, 'максимальное значение суммы:'
   print *, R_sum(maxloc(R_sum))
   print *, 'порядковый номер наибольшего элемента суммы:'
   print *, maxloc(R_sum)

end program exercise_5_17