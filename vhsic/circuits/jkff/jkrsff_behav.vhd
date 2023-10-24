library ieee;
use ieee.std_logic_1164.ALL;
entity jkrstr is
	port(
		J, K, R, S: in bit;
		Q, Qi: out bit
	);
end jkrstr;
architecture behavior of jkrstr is
	signal Qs, Qis: bit;
begin
	process(J, K, R, S)
		-- прямой выход инверсного триггера
		variable Q2: bit;
	begin
		-- работа устройства имеет смысл при rs 1:1
		-- недопустимая операция rs 0:0 не рассмотрена
		if (R /= S) then Qs <= not S;
		else
			if (K = '0') then
				-- работа защелки (открыто)
				Q2 := not Qs;
				-- положение 1:0 - 1 на прямом выходе
				if (J = '1') then Qs <= '1';
				-- положение 0:0 - хранение
				else Qs <= Qs;
				end if;
			else
				-- положение 1:1 - инверсия
				if (J = '1') then Qs <= Q2;
				-- положение 0:1 - 0 на прямом выходе
				else Qs <= '0';
				end if;
			end if;
		end if;
	end process;
	Q <= Qs;
	Qi <= Qis;
	Qis <= not Qs;
end behavior;

