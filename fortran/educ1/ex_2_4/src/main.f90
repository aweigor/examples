program exercise_2_4
   use Environment
   
   implicit none
   character(*), parameter    :: input_file = "./data/input.txt", output_file = "./bin/output.txt", fmt = '(3f10.3)'
   integer                    :: In = 0, Out = 1
   real(R_)                   :: a, b, c

   read (*,'(3f10.3)') a,b,c

   if (a == b) then 
      print '(f10.3)', c
   else if (a == c) then
      print '(f10.3)', b
   else if (b == c) then
      print '(f10.3)', a
   else
      print *,'равных чисел нет'
   end if

end program exercise_2_4