library ieee;
use ieee.std_logic_1164.all;
entity count4b is
	port (
		c, r: in bit;
		q1, q2, q3, q4: out bit
	);
end count4b;
architecture behavior of count4b is
	signal q1s, q2s, q3s, q4s: bit;
begin
	process(q1s, q2s, q3s, r, c)
	begin
		if (r = '1') then 
			q1s <= '0';
			q2s <= '0';
			q3s <= '0';
			q4s <= '0';
		else
			if (c'event and c = '1') then
				q1s <= not q1s;
			end if;
			if (q1s'event and q1s = '0') then
				q2s <= not q2s;
			end if;
			if (q2s'event and q2s = '0') then
				q3s <= not q3s;
			end if;
			if (q3s'event and q3s = '0') then
				q4s <= not q4s;
			end if;
		end if;
	end process; 
	q1 <= q1s;
	q2 <= q2s;
	q3 <= q3s;
	q4 <= q4s;
end behavior;
