function PowerA234(A) {
	let B, C, D;
	B = A * A;
	C = A * A * A;
	D = A * A * A * A;
	console.log('A во второй степени = ' + B);
	console.log('A во третьей степени = ' + C);
	console.log('A в четвертой степени = ' + D);
}
PowerA234(5);

function ShiftRight3(A, B, C) { // сдвиг в сторону
	let tA = A;	
	A = B;
	B = C;
	C = tA;
	console.log(A, B, C) 
}
ShiftRight3(3, 6, 9);

function RootsCount(a, b, c) { // дискриминант 
	let x,
		uravnenie = a * x * x + b * x + c,
		D = b * b - (4 * a * c),
		x1 = (-b + Math.sqrt(D)) / (2 * a),
		x2 = (-b - Math.sqrt(D)) / (2 * a);
	console.log(x1, x2);
}
RootsCount(3, 7, -6);

function fact(n) {
	let a = 1;
	if (n % 2 === 0) {
		while (n >= 2) {
			a = a * n;
			n = n - 2;
		}
		console.log(a);
	} else {
		while (n >= 1) {
			a = a * n;
			n = n - 2;
		}
		console.log(a);
	}
}

fact(8);
fact(9);