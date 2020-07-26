package letscode.logistic.domain;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import letscode.logistic.util.EntityIdResolver;
import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@JsonIdentityInfo(
        property = "id",
        generator = ObjectIdGenerators.PropertyGenerator.class,
        scope = Model.class,
        resolver = EntityIdResolver.class
)
public class Model implements ComboListItem {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;

    @ManyToOne
    @JsonIdentityReference(alwaysAsId = true)
    private Mark mark;

    @Override
    @JsonIgnore
    public String getRepr() {
        return String.format("%s %s", mark.getName(), name);
    }
}
