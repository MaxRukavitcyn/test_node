package observer;

import java.util.ArrayList;
import java.util.Iterator;

interface Observer {
    void objectCreated(Object obj);
    void objectModified(Object obj);
}

class EmptyObserver implements Observer {
    public void objectCreated(Object obj) { }
    public void objectModified(Object obj) { }
}

class Observers<T extends Observer> extends ArrayList<T> {
    public void notifyObjectCreated(Object obj) {
        for (Iterator<T> iter = (Iterator<T>) iterator(); iter.hasNext();)
            iter.next().objectCreated(obj);
    }
    public void notifyObjectModified(Object obj) {
        for (Iterator<T> iter = (Iterator<T>) iterator(); iter.hasNext();)
            iter.next().objectModified(obj);
    }
}

class Subject {
    Observers observers = new Observers();

    void subscribe(Observer observer){
        observers.add(observer);
    }

    private Object field;

    public void setField(Object o) {
        field = o;
        observers.notifyObjectCreated(this);
    }

}


public class Test {
    public static void main(String[] args) {
        Subject subject = new Subject();
        subject.subscribe(new EmptyObserver(){
            @Override
            public void objectCreated(Object obj) {
                System.out.println("test subscribe");
            }
        });

        subject.setField("set field");
    }
}
