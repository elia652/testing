package com.test2.test2;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "test")
public class Item {
    @Id
    private String id;

    private String name;
    private double price;
    private String description;
}
