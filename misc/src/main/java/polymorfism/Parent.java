package polymorfism;

public class Parent {
    public void doSmth(){
        System.out.println("parent class");
    }
}

class ChildOne extends Parent {
    @Override
    public void doSmth() {
        testOne();
    }
    public void testOne() {
        System.out.println("child one");
    }
}

class Test {
    public static void main(String[] args) {
        Parent ch = new ChildOne();
        ((ChildOne) ch).testOne();
    }
}
