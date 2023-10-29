library IEEE;
use IEEE.STD_LOGIC_1164.all;

entity dc32 is
	port(
		en: in STD_LOGIC;
		a: in STD_LOGIC_VECTOR(5 downto 0);
		q: out STD_LOGIC_VECTOR(63 downto 0)
	);
end dc32;

architecture struct of dc32 is
	component dc8
		port(
			en: in STD_LOGIC;
			a: in STD_LOGIC_VECTOR(2 downto 0);
			q: out STD_LOGIC_VECTOR(7 downto 0)
		);
	end component;
	-- output signals
	signal qs: STD_LOGIC_VECTOR(63 downto 0);
	-- input signals
	signal as: STD_LOGIC_VECTOR(5 downto 0);
	-- enable signals
	signal ens: STD_LOGIC_VECTOR(7 downto 0);
	signal ensi: STD_LOGIC_VECTOR(7 downto 0); -- inverted
begin
	
	d0:dc8 PORT MAP (en, as(5 downto 3), ens);
	d1:dc8 PORT MAP (ensi(0), as(2 downto 0), qs(7 downto 0));
	d2:dc8 PORT MAP (ensi(1), as(2 downto 0), qs(15 downto 8));
	d3:dc8 PORT MAP (ensi(2), as(2 downto 0), qs(23 downto 16));
	d4:dc8 PORT MAP (ensi(3), as(2 downto 0), qs(31 downto 24));
	d5:dc8 PORT MAP (ensi(4), as(2 downto 0), qs(39 downto 32));
	d6:dc8 PORT MAP (ensi(5), as(2 downto 0), qs(47 downto 40));
	d7:dc8 PORT MAP (ensi(6), as(2 downto 0), qs(55 downto 48));
	d8:dc8 PORT MAP (ensi(7), as(2 downto 0), qs(63 downto 56));
	
	q <= qs;
	as <= a;
	ensi <= not ens;
	
end struct;

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

use work.all;

configuration conf of dc32 is
	for struct
		for d0,d1,d2,d3,d4,d5,d6,d7,d8 : dc8 
			use entity dc8(behav);
		end for;
	end for;
end conf;