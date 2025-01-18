import java.util.Scanner;

public class main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter the length of the password: ");
        int digit = input.nextInt();

        String lower_case = "qwertyuiopasdfghjklzxcvbnm";
        String upper_case = lower_case.toUpperCase();
        String special = "!@#$%^&*<>?/~`";
        String numbers = "0123456789";

        String password = "";

        for (int i = 0; i < digit; i++) {
            int rand = (int) (5 * Math.random()); 

            switch (rand) {
                case 0 -> {
                    int randIndex = (int) (lower_case.length() * Math.random());
                    password += lower_case.charAt(randIndex);
                }
                case 1 -> {
                    int randIndex = (int) (upper_case.length() * Math.random());
                    password += upper_case.charAt(randIndex);
                }
                case 2 -> {
                    int randIndex = (int) (special.length() * Math.random());
                    password += special.charAt(randIndex);
                }
                case 3 -> {
                    int randIndex = (int) (numbers.length() * Math.random());
                    password += numbers.charAt(randIndex);
                }
                case 4 -> {
                    password += (int) (10 * Math.random()); 
                }
            }
        }

        System.out.println("Generated password: " + password);
    }
}
