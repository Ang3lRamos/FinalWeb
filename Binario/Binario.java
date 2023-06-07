import java.util.Scanner;

public class Binario {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Ingrese números en base 8 (0-7) uno por uno (-1 para finalizar):");
        boolean continuar = true;
        while (continuar) {
            System.out.print("Ingrese un número: ");
            int numero = scanner.nextInt();

            if (numero == -1) {
                continuar = false;
            } else if (numero < 0 || numero > 7) {
                System.out.println("El número debe estar en el rango de 0 a 7 o ingresar -1 para finalizar.");
            } else {
                String binario = convertTobinario(numero);
                System.out.println("Número binario correspondiente: " + binario);
            }
        }
        System.out.println("Programa finalizado.");
    }

    public static String convertTobinario(int numero) {
        String binario = Integer.toBinaryString(numero);
        String binarioCompleto = String.format("%3s", binario).replace(' ', '0');
        return binarioCompleto;
    }
}
