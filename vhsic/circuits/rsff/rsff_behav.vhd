-- MAX+plus II VHDL Template
-- Clearable flipflop with enable

LIBRARY ieee;
USE ieee.std_logic_1164.ALL;

ENTITY rstr IS

	PORT
	(
		s:  IN	STD_LOGIC;
		r:  IN	STD_LOGIC;
		q:  INOUT STD_LOGIC;
		qb: INOUT STD_LOGIC
	);
	
END rstr;

ARCHITECTURE behav OF rstr IS

COMPONENT notand

PORT(
	a: IN		STD_LOGIC;
	b: IN		STD_LOGIC;
	c: OUT		STD_LOGIC
);

END COMPONENT;

BEGIN

u1: notand
	PORT MAP (s, qb, q);
u2: notand
	PORT MAP (q, r, qb);

END behav;

CONFIGURATION con OF rstr IS
	FOR behav
		FOR u1, u2: notand
			USE ENTITY work.notand(behavior);		
		END FOR;
	END FOR;
END con;
