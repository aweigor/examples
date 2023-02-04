program exercise_4_1b
   use Environment
   
   implicit none
   character(*), parameter    :: input_file = "./data/input.txt", output_file = "./bin/output.txt"
   real(8)                    :: delta, floor, max, res
   integer(4)                 :: In = 0, Out = 1, x

   open (file=input_file, newunit=In)
      read (In, '(3f5.2)') delta, floor, max
   close (In)

   do x = 0, int((max-floor)/delta)
      res = (log(floor + delta*x) + sin(floor + delta*x) ** 2)   
      open (file=output_file, encoding=E_, newunit=Out, position='append')
         write (Out, '(f5.2)') res
      close (Out)
      print '(f5.2)', res
   end do

end program exercise_4_1b