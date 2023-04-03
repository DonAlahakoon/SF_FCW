package com.lmsbackend.demo.lecturer;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface LecturerRepository extends MongoRepository<Lecturer,String>{

}
