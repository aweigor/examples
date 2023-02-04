program exercise_7_3
   use Environment

   implicit none
   character(*), parameter             :: output_file = "./bin/output.txt", fmt="f5.1"
   integer(I_)                         :: sizeA=0, sizeB=0
   integer                             :: In = 0, Out = 0
   real(R_), allocatable               :: A(:), B(:), C(:)

   open (file="./data/input.txt", newunit=In)
      read (In, '(2i3)') sizeA, sizeB
      allocate(A( sizeA ))
      allocate(B( sizeB ))
      allocate(C( sizeA + sizeB ))
      call readVector("./data/vectorA.txt",sizeA,fmt,A)
      call readVector("./data/vectorB.txt",sizeB,fmt,B)
   close (In)

   C(:sizeA) = A(:)
   C(sizeA+1:sizeA+sizeB) = B(:)
   call sort(C,sizeA+sizeB)

   open (file=output_file, encoding=E_, newunit=Out)
      write (Out, *) 'исходный вектор A:'
      write (Out, '('//sizeA//fmt//')') A(:)
      write (Out, *) 'исходный вектор B:'
      write (Out, '('//sizeB//fmt//')') B(:)
      write (Out, *) 'полученный вектор C:'
      write (Out, '('//sizeA+sizeB//fmt//')') C(:)
   close (Out)

   print *, C

   contains
      subroutine sort(arr,size)
         real(R_)    :: arr(:), t
         integer(I_) :: size
         integer i, k
         
         !bubble sort
         if (size > 1) then
            do i = 1, size
               do k = size, i+1, -1
                  if (arr(k-1) > arr(k)) then
                     !swap
                     t = arr(k)
                     arr(k) = arr(k-1)
                     arr(k-1) = t
                  end if
               end do
            end do
         end if
      end subroutine sort

end program exercise_7_3