program lab_4  
   use Environment
   use String_IO
   use String_Process

   implicit none
   character(:), allocatable :: input_file, output_file
   
   type(list), pointer             :: StringList => Null()
   
   output_file = "output.txt"
   
   input_file = './data/file.txt'
   StringList => readStringList(input_file)
   
   call convertPolish(StringList)
   call traverseList(StringList%head)
   
end program lab_4