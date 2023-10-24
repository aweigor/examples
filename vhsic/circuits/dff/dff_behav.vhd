LIBRARY ieee;
USE ieee.std_logic_1164.ALL;
ENTITY dtr IS
PORT(
	d: IN std_logic;
	cl: IN std_logic;
	q: OUT std_logic;
	qb: OUT std_logic
);
END dtr;
ARCHITECTURE behav OF dtr IS
COMPONENT notand
PORT (
	a: IN std_logic;
	b: IN std_logic;
	c: INOUT std_logic
);
END COMPONENT;
COMPONENT rstr
PORT (
	s: IN std_logic;
	r: IN std_logic;
	q: INOUT std_logic;
	qb: INOUT std_logic
);
END COMPONENT;

SIGNAL SIG_D: std_logic;
SIGNAL SIG_CL: std_logic;
SIGNAL SIG_Q: std_logic;
SIGNAL SIG_QB: std_logic;

BEGIN
u0: rstr
	PORT MAP (SIG_D,SIG_CL,SIG_Q,SIG_QB);
u1: notand
	PORT MAP (d,cl,SIG_D);
u2: notand
	PORT MAP (SIG_D,cl,SIG_CL);

q <= SIG_Q;
qb <= SIG_QB;

END behav;
CONFIGURATION con OF dtr IS
	FOR behav
		FOR u1:notand
			USE ENTITY work.notand(behavior);
		END FOR;
		FOR u2:notand
			USE ENTITY work.notand(behavior);
		END FOR;
		FOR u0:rstr
			USE ENTITY work.rstr2(behav);
		END FOR;
	END FOR;
END con;
