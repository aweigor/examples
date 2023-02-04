module environment
   use ISO_Fortran_Env

   implicit none
    
   integer, parameter      :: I_ = INT32                             ! Разновидность типа для целочисленных переменных.
   integer, parameter      :: R_ = REAL32                            ! Разновидность типа для вещественных переменных.
   integer, parameter      :: C_ = R_                                ! Разновидность типа для компексных переменных.
   integer, parameter      :: CH_= Selected_Char_Kind("ISO_10646")   ! Разновидность типа для символов.
   character(*), parameter :: E_ = "UTF-8"                           ! Кодировка файлов.

   interface operator (//)
      module procedure Int_plus_string
      module procedure String_plus_int
   end interface

contains

   pure function Int_plus_string(int, str) result(res)
      integer, intent(in)                                         :: int
      character(*), intent(in)                                    :: str
      character(len(str)+Max(Floor(Log10(Real(int, I_*2)))+1, 1)) :: res

      write (res, '(i0, a)') int, str
   end function Int_plus_string

   pure function String_plus_int(str, int) result(res)
      character(*), intent(in)                                    :: str
      integer, intent(in)                                         :: int
      character(len(str)+Max(Floor(Log10(Real(int, I_*2)))+1, 1)) :: res

      write (res, '(a, i0)') str, int
   end function String_plus_int

   ! Обработка статуса ввода/вывода.
   subroutine Handle_IO_status(IO, where)
      integer, intent(in)        :: IO
      character(*), intent(in)   :: where

      open (ERROR_UNIT, encoding=E_)
      select case(IO)
         case(0, IOSTAT_END, IOSTAT_EOR)
         case(1:)
            write (ERROR_UNIT, '(a, i0)') "Error " // where // ": ", IO
         case default
            write (ERROR_UNIT, '(a, i0)') "Undetermined behaviour has been reached while " // where // ": ", IO
      end select
      ! close (Out) ! Если не OUTPUT_UNIT.
   end subroutine Handle_IO_status

   subroutine no_entry_matrix(M,N)
      integer(I_), intent(in)     :: M,N
      print *, M,N
   end subroutine no_entry_matrix

   subroutine readMatrix(inputFile,M,N,fmt,matrix)
      character(*), intent(in)                                    :: inputFile, fmt
      integer(I_), intent(in)                                    :: M,N
      real(R_) ::  matrix(M,N)
      integer :: i, In = 0
      
      open (file=inputFile, newunit=In)
         read (In, '('//N//fmt//')', end=100) (matrix(i, :), i = 1, M)
         return
         100 call createMatrix(inputFile,M,N,fmt,matrix)
      close (In)
      
   end subroutine readMatrix

   subroutine createMatrix(inputFile,M,N,fmt,matrix)
      character(*), intent(in)   :: inputFile, fmt
      integer(I_), intent(in)    :: M,N
      real(R_)      :: matrix(M,N)
      integer                    :: i, Out = 1
      
      call random_number(matrix(:,:))
      matrix(:,:) = matrix(:,:)*100

      open (file=inputFile, encoding=E_, newunit=Out)
         write (Out, '('//N//fmt//')') (matrix(i, :), i = 1, M)
      close (Out)
   end subroutine createMatrix

end module environment
