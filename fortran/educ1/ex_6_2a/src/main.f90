program exercise_6_2a
   use Environment

   implicit none
   character(*), parameter             :: output_file = "./bin/output.txt"
   real(R_), save                      :: checksum = 1.0
   real(R_)                            :: sum, acc = 1.0, n = 1.0
   real(R_)                            :: x, x2, relerr

   relerr = 0.01
   x = 1
   x2 = (-1) * x**2
   sum = checksum

   sum = sum + calculateSequence(n, acc, x, x2, relerr, checksum)

   ! почему sum = checksum + calculateSeq.... вернет неверный результат?

   print *, sum

   contains
      recursive function calculateSequence (n, acc, x, x2, relerr, checksum) result (sum)
         real(R_)             :: n, acc, x, x2, relerr, checkSum
         real(R_)             :: sum, q

         q = x2 / (n + ( (2*n) / (2*n - 1) ) )
         acc = acc * q

         print *, acc, checksum

         if ( .not. abs(acc/checksum) .lt. relerr ) then
            n = n + 1
            checksum = checksum + acc
            sum = acc + calculateSequence(n, acc, x, x2, relerr, checksum)
         else
            sum = acc
         end if

      end function calculateSequence
   
end program exercise_6_2a