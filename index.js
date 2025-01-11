function googleCloudOverview(req, res) {
    const overview = {
        title: "Google Cloud Overview",
        sections: [{
                title: "1. Google Cloud Resources",
                content: [{
                        category: "Physical and Virtual Assets",
                        details: [
                            "Physical: Data centers, computers, hard drives.",
                            "Virtual: Virtual machines (VMs), storage."
                        ]
                    },
                    {
                        category: "Global Distribution",
                        details: [
                            "Resources are organized into regions (e.g., Asia, Europe, North America) and zones (e.g., asia-east1-a).",
                            "Benefits: Redundancy, reduced latency, and better client proximity."
                        ]
                    }
                ]
            },
            {
                title: "2. Accessing Resources through Services",
                content: [
                    "Hardware/software become services accessible via APIs.",
                    "Develop infrastructure by combining services and adding custom code.",
                    "Continuous growth in the list of services."
                ]
            },
            {
                title: "3. Resource Scope",
                content: [{
                        type: "Global Resources",
                        description: "Accessible across all regions/zones.",
                        examples: ["Preconfigured disk images", "Snapshots", "Networks"]
                    },
                    {
                        type: "Regional Resources",
                        description: "Accessible only within the same region.",
                        examples: ["Static external IP addresses"]
                    },
                    {
                        type: "Zonal Resources",
                        description: "Accessible only within the same zone.",
                        examples: ["VM instances", "Instance types", "Disks"]
                    }
                ]
            },
            {
                title: "4. Key Benefits",
                content: [
                    "Redundancy: High availability in case of failures.",
                    "Low Latency: Resources closer to end-users."
                ]
            },
            {
                title: "5. Additional Learning",
                content: [
                    "Explore Advantages and Disadvantages of Cloud Computing.",
                    "Tutorials and documentation help you experiment with scenarios."
                ]
            }
        ],
        title: "Google Cloud Run Functions",
        sections: [{
                title: "1. Simplified Developer Experience",
                content: [{
                    details: [
                        "Write code without worrying about infrastructure.",
                        "Use small, event-driven code snippets for faster development.",
                        "Integrate seamlessly with Google Cloud services or third-party tools."
                    ]
                }]
            },
            {
                title: "2. Cost Efficiency",
                content: [
                    "Pay only for the execution time of your function, rounded to the nearest 100 milliseconds.",
                    "No charges when functions are idle.",
                    "Automatically scales up or down based on demand."
                ]
            },
            {
                title: "3. Open Technology",
                content: [
                    "Avoid vendor lock-in using the open-source Knative framework.",
                    "Run functions across Cloud Run, local environments, on-premises systems, or other Knative-supported platforms."
                ]
            },
            {
                title: "4. Integration with Third-Party Services and APIs",
                content: [
                    "Expose custom microservices via HTTP APIs.",
                    "Respond to webhook events for services like Stripe or Twilio.",
                    "Example: Send confirmation emails after payment or reply to SMS events."
                ]
            },
            {
                title: "5. Serverless Mobile Backends",
                content: [
                    "Extend Firebase applications without managing servers.",
                    "Trigger events like user actions, analytics, or authentication."
                ]
            }
        ]
    };

    res.status(200).json(overview);
}

module.exports = { googleCloudOverview };