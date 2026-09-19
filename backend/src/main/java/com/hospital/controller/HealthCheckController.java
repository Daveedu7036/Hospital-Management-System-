package com.hospital.controller;

import com.hospital.dto.ApiResponse;
import com.hospital.dto.HealthCheckResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.sql.DataSource;
import java.sql.Connection;
import java.time.Instant;

@RestController
@RequestMapping("/api/v1/health")
@RequiredArgsConstructor
@Tag(name = "Health Check", description = "System health status and diagnostics endpoints")
public class HealthCheckController {

    private final DataSource dataSource;

    @Value("${spring.profiles.active:dev}")
    private String activeProfile;

    @Value("${spring.application.name:smart-hospital-backend}")
    private String appName;

    @GetMapping
    @Operation(summary = "Get System Health Status", description = "Verifies backend operational status, version, and active database connection state.")
    public ResponseEntity<ApiResponse<HealthCheckResponse>> checkHealth(HttpServletRequest request) {
        String dbStatus = "HEALTHY";
        try (Connection conn = dataSource.getConnection()) {
            if (conn.isClosed()) {
                dbStatus = "DISCONNECTED";
            }
        } catch (Exception e) {
            dbStatus = "ERROR: " + e.getMessage();
        }

        HealthCheckResponse healthData = HealthCheckResponse.builder()
                .status("UP")
                .service(appName)
                .version("1.0.0")
                .database(dbStatus)
                .environment(activeProfile)
                .timestamp(Instant.now())
                .build();

        return ResponseEntity.ok(
                ApiResponse.success(healthData, "Smart Hospital Backend is operational", request.getRequestURI())
        );
    }
}
