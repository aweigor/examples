library ieee;
use ieee.std_logic_1164.ALL;
entity trstr is
	port(
		T, R, S: in bit;
		Q, Qi: out bit
	);
end trstr;
architecture behavior of trstr is
	signal Qs, Qis: bit;
begin
	process(T, R, S)
	begin
		-- работа устройства имеет смысл при rs 1:1
		-- недопустимая операция rs 0:0 не рассмотрена
		if (R /= S) then Qs <= not S; 		
		elsif (T'event and T = '1') then
			Qs <= not Qs;
			Qis <= not Qis;
		end if;
	end process;
	Q <= Qs;
	Qi <= Qis;
end behavior;

