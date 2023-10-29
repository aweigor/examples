library IEEE;
use IEEE.STD_LOGIC_1164.all;

entity dc8 is
	port(
		en: in STD_LOGIC;
		a: in STD_LOGIC_VECTOR(2 downto 0);
		q: out STD_LOGIC_VECTOR(7 downto 0)
	);
end dc8;

architecture behav of dc8 is
-- Для конъюнктивных термов И-НЕ применимо правило Де-Моргана
begin
	q(0) <= a(2) or a(1) or a(0) or not en; -- 000
	q(1) <= a(2) or a(1) or not a(0) or not en; -- 001
	q(2) <= a(2) or not a(1) or a(0) or not en; -- 010
	q(3) <= a(2) or not a(1) or not a(0) or not en; -- 011
	q(4) <= not a(2) or a(1) or a(0) or not en; -- 100
	q(5) <= not a(2) or a(1) or not a(0) or not en; -- 101
	q(6) <= not a(2) or not a(1) or a(0) or not en; -- 110
	q(7) <= not a(2) or not a(1) or not a(0) or not en; -- 111
end behav;
