package com.test2.test2;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface MongoRepos extends MongoRepository<Item,String> {
}
