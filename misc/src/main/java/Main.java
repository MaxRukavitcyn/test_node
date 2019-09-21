import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        Animal lion = new Lion();
        Animal tiger = new Tiger();

        List<Animal> animals = new ArrayList<>();
        animals.add(lion);
        animals.add(tiger);
        animals.forEach(Animal::roar);

        List<Roarable> zoo = new ArrayList<>();
        zoo.add(tiger);
        zoo.add(lion);
        zoo.forEach(Roarable::roar);
    }
}
