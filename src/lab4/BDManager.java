package lab4;
import lab4.Entitys.Persons;
import lab4.Entitys.Points;

import javax.persistence.EntityManager;
import javax.persistence.Persistence;
import javax.persistence.Query;
import javax.persistence.TypedQuery;
import java.util.List;

/**
 * Created by danil on 25.10.2017.
 */
public class BDManager {
    public EntityManager em = Persistence.createEntityManagerFactory("NewPersistenceUnit").createEntityManager();
    public Persons addPerson(Persons pe){
        em.getTransaction().begin();
        Persons peFromBd = em.merge(pe);
        em.getTransaction().commit();
        return peFromBd;
    }
    public List<Points> getAllPersonPoints(String login){
        em.getTransaction().begin();
        TypedQuery<Points> q = (TypedQuery<Points>) em.createQuery("SELECT p FROM Points p where p.perosonsLogin = " +
                ":perosonsLogin", Points.class).setParameter("perosonsLogin", login);
        em.getTransaction().commit();
        return q.getResultList();
    }
    public Points addPoints(Points po){
        em.getTransaction().begin();
        Points poFromBd = em.merge(po);
        em.getTransaction().commit();
        return poFromBd;
    }
    public void delAllPersonPoints(String login){
        em.getTransaction().begin();
//        em.createQuery("DELETE FROM Points p where p.perosonsLogin = " +
//                ":perosonsLogin", Points.class).setParameter("perosonsLogin", login);
        TypedQuery<Points> q = (TypedQuery<Points>) em.createQuery("SELECT p FROM Points p where p.perosonsLogin = " +
                ":perosonsLogin", Points.class).setParameter("perosonsLogin", login);
        List<Points> list = q.getResultList();
        for(int i = 0;i<list.size();i++){
            em.remove(list.get(i));
        }
        em.getTransaction().commit();
    }
    public int checkPerson(String login, String pass){
        int result = 0;
        TypedQuery<Persons> q = (TypedQuery<Persons>) em.createQuery("SELECT p FROM Persons p where p.login = :login and p.hash = :hash", Persons.class)
                .setParameter("login", login)
                .setParameter("hash", new Persons(login,pass).getHash());
        if(q.getResultList().size()!=0){
            result = 1;
        }else{
            q = (TypedQuery<Persons>) em.createNativeQuery("SELECT * FROM PERSON p where p.login = :login", Persons.class)
                    .setParameter("login", login);
            if(q.getResultList().size()!=0){
                result = 2;
            }
        }
        return result;
    }
}
