program lab_1_2
   use Environment

   implicit none
   integer iostat
   
   type node_t
      character(1, kind=CH_) :: symbol = ""
      type(node_t), pointer :: next => null()
   end type node_t

   type params_t
      integer(I_) :: delete_pos, delete_size, insert_pos 
      character(:, kind=CH_), allocatable :: insert_val
   end type params_t
   
   type(node_t), pointer               :: List => Null()
   type(params_t)                      :: Params
   character(:,kind=CH_), allocatable  :: ProcLine
   character(256, kind=CH_)            :: buffer
   character(1)                        :: command
   character(:), allocatable           :: input_file, output_file, format
   integer :: i = 1, j = 1, k = 1, In, Out, IO, position,lsize


   input_file = "./data/input.txt"
   output_file = "output.txt"

   open (file=input_file, encoding=E_, newunit=In)
      
      read (In,'(a)')  buffer
      ProcLine = trim(adjustl(buffer))
      lsize = len_trim(ProcLine)
      List => nodesFromString(ProcLine,lsize,i)

      ProcLine = ''
      i = 1

      do
         read (In,'(a)',iostat=IO) buffer
         if (IO /= 0) then 
            exit
         end if

         ProcLine = trim(adjustl(buffer))
         command = ProcLine(1:1)

         if (command == 'D') then
            format = '(a1 i3 i2)'
            read (ProcLine, format) command, Params%delete_pos, Params%delete_size
            call deleteNodes(i, Params%delete_pos, Params%delete_size, List, List%next)
         else if (command == 'I') then
            format = '(a1 i3 a5)'
            read (ProcLine, format) command, Params%insert_pos, buffer
            Params%insert_val = trim(adjustl(buffer))

            call insertNodes(i, Params%insert_pos, Params%insert_val, List)

         else 
            print *, 'Error: undefined command'
         end if

         ProcLine = ''
      end do

   close (In)

   open (file=output_file, encoding=E_, newunit=Out)
      write (Out, '(a)') "Строка после выполнения:"
      call listToString(ProcLine,List)
      write (Out, '(a)') ProcLine
      print *, ProcLine
      ProcLine = ''
   close (Out)


   contains
      subroutine parseParams(Params,string,buffer,command)
         type (params_t)                        :: Params
         character (:,kind=CH_), allocatable    :: string
         character (:),allocatable              :: format
         character (1)                          :: command
         character (256, kind=CH_)              :: buffer
         
         if (command == 'D') then
            format = '(a1 i3 i2)'
            read (string, format) command, Params%delete_pos, Params%delete_size
         else if (command == 'I') then
            format = '(a1 i3 a5)'
            read (string, format) command, Params%insert_pos, buffer
            Params%insert_val = trim(adjustl(buffer))
         else 
            print *, 'Error: undefined command'
         end if
      end subroutine parseParams

      subroutine execute(command,Params,List)
         type(node_t), pointer                  :: List
         type (params_t)                        :: Params
         character (1)                          :: command
         integer  :: index = 1

         print *, command

         if (command == 'D') then
            call deleteNodes(index, Params%delete_pos, Params%delete_size, List, List%next)
         else if (command == 'I') then
            !call deleteNodes(index, position, size, current)
         else 
            print *, 'Error: undefined command on execute'
         end if
      end subroutine execute

      recursive function nodesFromString (string, size, readpos) result (node)
         type(node_t), pointer   :: node
         character(:, kind=CH_), allocatable  :: string
         integer  IO, size, readpos

         allocate(node)
         node%symbol = string(readpos:readpos)
         
         if (readpos <= size) then
            readpos = readpos + 1
            node%next => nodesFromString(string, size, readpos)
         else
            deallocate (node)
            nullify (node)
         end if
         
      end function nodesFromString

      recursive function nodesFromStream (In) result (node)
         type(node_t), pointer   :: node
         integer, intent(in)     :: In

         integer  IO
         
         allocate (node)
         read (In, '(a1)', iostat=IO) node%symbol
         print *, node%symbol
         call Handle_IO_status(IO, "reading symbol from file")
         if (IO == 0) then
            node%next => nodesFromStream(In)
         else
            deallocate (node)
            nullify (node)
         end if
      end function nodesFromStream

      recursive subroutine listToString (string, node)
         character(:,kind=CH_), allocatable, intent(inout) :: string
         type(node_t), pointer, intent(In) :: node

         string = string // node%symbol

         if (Associated(node%next)) then
            call listToString(string, node%next)
         end if
      end subroutine listToString

      recursive subroutine deleteNodes (index, position, size, prev, current)
         integer  :: position, size, index
         type(node_t), pointer, intent(inout)   :: prev, current
         type(node_t), pointer  :: tmp => Null()

         if (Associated(current)) then
            index = index + 1
            if (index >= position .and. index < (position+size)) then
               if (Associated(current%next)) then
                  current => current%next
                  prev%next => current
                  call deleteNodes(index, position, size, prev, current)
               else
                  nullify(current)
               end if
            else
               call deleteNodes(index, position, size, prev%next, current%next)
            end if
         end if
      end subroutine deleteNodes
      
      subroutine insertNodes (index, position, string, current)
         integer  :: position, index
         character(:, kind=CH_), allocatable :: string
         type(node_t), pointer, intent(inout)   :: current
         type(node_t), pointer  :: tmp => Null(), tmp2 => Null()
         integer i, strsize

         tmp => current
         do i = 1, position 
            if (associated(tmp%next)) then
               tmp => tmp%next
            end if
         end do

         i = 1
         strsize = len_trim(string)
         if (Associated(tmp%next)) then
            tmp2 => tmp%next
         end if
         tmp%next => nodesFromString (string, strsize, i)

         do while (Associated(tmp%next))
            tmp => tmp%next
         end do
         tmp%next => tmp2
      end subroutine insertNodes

      

end program lab_1_2
