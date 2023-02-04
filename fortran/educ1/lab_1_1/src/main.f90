program lab_1_8

   use Environment
   implicit none
   integer, parameter   ::  SURNAME_LEN = 15, PHONE_LEN = 10, DATA_LEN = 10

   type person
      character(SURNAME_LEN, kind=CH_) :: surname = ""
      integer(kind=INT64) :: phone = 0000000000
   end type person

   type(person), dimension(DATA_LEN)  :: Persons
   character(:), allocatable  :: input_file, output_file, format

   integer :: In, Out, IO, i

   input_file = "./data/phones.txt"
   output_file = "output.txt"
   format = '(a'//SURNAME_LEN//',i'//PHONE_LEN//')'

   open (file=input_file, encoding=E_, newunit=In)
      read (In, format, iostat=IO) (Persons(i)%surname, Persons(i)%phone, i=1, DATA_LEN)
   close (In)

   open (file=output_file, encoding=E_, newunit=Out)
      write (out, '(a)') "Исходный список:"
      write (Out, format, iostat=IO) (Persons(i)%surname, Persons(i)%phone, i=1, DATA_LEN)
   close (Out)

   call insertsort(Persons, DATA_LEN)

   open (file=output_file, encoding=E_, newunit=Out, position='append')
      write (out, '(a)') "Сортированный список:"
      write (Out, format, iostat=IO) (Persons(i)%surname, Persons(i)%phone, i=1, DATA_LEN)
   close (Out)

   print *, (Persons(i), i = 1, DATA_LEN)

   contains
      subroutine insertsort (persons, size)
         type(person)         :: persons(:), tmp
         integer :: size, i, j
         
         do i = 2, size
            j = i
            do while (j > 1 .and. (persons(j)%phone .lt. persons(j-1)%phone))
               tmp               = persons(j)
               persons(j)        = persons(j-1)
               persons(j-1)      = tmp
               j = j - 1
            end do
         end do
      end subroutine insertsort

end program lab_1_8