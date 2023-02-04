program exercise_1_1
   use Environment
   
   implicit none
   character(*), parameter    :: input_file = "./data/input.txt", output_file = "./bin/output.txt", fmt = "(a, T12, '= ', f6.2)"
   integer                    :: In = 0, Out = 0
   real(R_)                   :: x1, x2, determinant = 0
   real(R_), dimension(2,3)   :: Terms

   open (file=input_file, newunit=In)
      read (In, *) Terms
   close (In)

   determinant = Terms(1,1) * Terms(1,3) - Terms(2,1) * Terms(2,2)

   open (file=output_file, encoding=E_, newunit=Out)
      if (determinant == 0) then
         write (Out, *) "error: determinant equals zero"
         stop -1
      else
         write (Out, fmt) "determinant", determinant
      end if
   close (Out)

   x1 = ((-1)*Terms(2,1)*Terms(2,3) + Terms(1,3)*Terms(1,2)) / determinant
   x2 = (Terms(1,1)*Terms(2,3) + (-1)*Terms(1,2)*Terms(2,2)) / determinant

   open (file=output_file, encoding=E_, newunit=Out, position='append')
      write (Out, fmt) "x1", x1
      write (Out, fmt) "x2", x2
   close (Out)
   
end program exercise_1_1