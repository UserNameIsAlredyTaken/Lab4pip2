package lab4.Entitys;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

/**
 * Created by danil on 25.10.2017.
 */
@Entity
@Table(name = "POINT")
public class Points {
    @Id
    @GenericGenerator(name="generator", strategy="increment")
    @GeneratedValue(generator="generator")
    private int id;
    @Column
    private double x;
    @Column
    private double y;
    @Column
    private double R;
    @Column
    private int res;

    @Column
    private String perosonsLogin;

    public String getPerosonsLogin() {
        return perosonsLogin;
    }
    public void setPerosonsLogin(String perosnsLogin) {
        this.perosonsLogin = perosnsLogin;
    }
    public int getId() {
        return id;
    }
    public double getX() {
        return x;
    }
    public void setX(double x) {
        this.x = x;
    }
    public double getY() {
        return y;
    }
    public void setY(double y) {
        this.y = y;
    }
    public double getR() {
        return R;
    }
    public void setR(double r) {
        R = r;
    }
    public boolean getRes() {
        return res!=0;
    }
    public void setRes(boolean res) {
        if(res){
            this.res=1;
        }else{
            this.res=1;
        }
    }
    public Points(){}
    public Points(double x, double y, double R, String perosonsLogin){
        setPerosonsLogin(perosonsLogin);
        setR(R);
        setX(x);
        setY(y);
        setRes(checkArea(x,y,R));
    }
    private boolean checkArea(double x,double y,double R){
        if(x<=0&&x>=-R&&y>=0&&y<=R){
            return true;
        }
        if(x>=0&&y<=0&&y-x>=(R/2)){
            return true;
        }
        else if(x>=0&&y>=0&&y*y+x*x<=(R/2)*(R/2)){
            return true;
        }
        return false;
    }
    @Override
    public String toString() {
        return "Point{" +
                "x=" + x +
                ", y='" + y +
                ", R=" + R +
                ", res=" + res +
                '}';
    }
}
