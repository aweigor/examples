program lab_3   
   use Environment
   use String_IO
   use String_Process

   implicit none
   character(:), allocatable :: input_file, output_file
   
   character(1,kind=CH_), allocatable  :: temp, StringVect(:)
   type(symbol_t), pointer             :: StringList => Null()
   
   output_file = "output.txt"
   
   input_file = './data/file_one.txt'
   StringList => readStringList(input_file)
   
   input_file = './data/file_two.txt'
   StringVect = readStringVect(input_file)

   call trimVect(StringVect, StringList)
   !call trimList(StringList, StringVect)
   print *, StringVect(:)
   
end program lab_3