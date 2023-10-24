library ieee;
use ieee.std_logic_1164.all;
-- std_logic_vector
use ieee.std_logic_arith.all;
-- расширение std_logic_arith для поддержки векторной арифметики
use ieee.std_logic_unsigned.all;
entity count4 is
	port(
		jk, clock, reset: in bit;
		q: out std_logic_vector(3 downto 0)
	);
end count4;
architecture behavior of count4 is
	signal count: std_logic_vector(3 downto 0) := "0000";
begin
	process(clock, jk, reset)
	begin 
		if (reset = '1') then count <= "0000";
		elsif (clock'event and clock = '1') then
			if (jk = '1') then
				count <= count + 1;
			end if;
		end if;
		q <= count;
	end process;
end behavior;

