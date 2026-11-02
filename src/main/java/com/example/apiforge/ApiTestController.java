
package com.example.apiforge;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;
@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class ApiTestController {

    @GetMapping("/api/test/sample")
    public Map<String, Object> sampleTest() {
        return Map.of(
            "testName", "Sample API Test",
            "status", "PASSED",
            "httpStatus", 200,
            "responseTimeMs", 45
        );
    }
}

