const AllQuizes = [
  {
    question:
      "Which network connections are used by AWS Snowball to minimize data transfer times?",
    choices: [
      {
        text: "both UTP and STP copper cables"
      },
      {
        text: "both USB and Ethernet cables with special adapters"
      },
      {
        text: "both thinnet and thicknet copper cables"
      },
      {
        text: "both RJ45 and SFP+ with either a fiber or copper interface"
      }
    ],
    answers: [3],
    help:
      "An AWS Snowball appliance has a 10GBaseT network connection (both RJ45 as well as SFP+ with either a fiber or copper interface) to minimize data transfer time.",
    tags: ["aws", "storage"]
  },
  {
    question:
      "__________ is a good choice for distribution of frequently accessed static content that benefits fromedge delivery, like popular website images, videos, media files or software downloads.",
    choices: [
      {
        text: "Amazon CloudFront"
      },
      {
        text: "Amazon Glacier"
      },
      {
        text: "Amazon S3"
      },
      {
        text: "Amazon EBS"
      }
    ],
    answers: [0],
    help:
      "Amazon CloudFront is a good choice for distribution of frequently accessed static content that benefits edge delivery, like popular website images, videos, media files or software downloads.",
    tags: ["aws", "storage"]
  },
  {
    question: "Where does Amazon EFS store its data?",
    choices: [
      {
        text: "A bucket"
      },
      {
        text: "A volume"
      },
      {
        text: "A cache"
      },
      {
        text: "A file system"
      }
    ],
    answers: [3],
    help:
      "Amazon EFS is similar to on-premise network attached storage, in contrast to EBS and EC2 instance store, which offer virtual directly attached storage, and Amazon S3, which offers internet accessible object storage with a flat structure.",
    tags: ["aws", "storage"]
  },
  {
    question: "How can AWS Snowball handle petabyte-scale data migration?",
    choices: [
      {
        text:
          "Data is sent encoded (forward error correction) via a high speed network connection."
      },
      {
        text: "Data is sent compressed via a high speed network connection."
      },
      {
        text:
          "Data is sent via a shipping container, pulled by a semi-trailer truck."
      },
      {
        text: "Data is sent via a physical appliance sent to you by AWS."
      }
    ],
    answers: [3],
    help:
      "Snowball uses secure appliances to transfer large amounts of data into and out of the AWS cloud; this is fast and cheaper than high-speed internet.",
    tags: ["aws", "storage"]
  },
  {
    question:
      "How is every object stored in S3 Standard storage replicated to increase the data durability?",
    choices: [
      {
        text:
          "Multiple copies are stored in different availability zone within the same region as the original object."
      },
      {
        text:
          "Each object is copied via an increamental snapshot, which is stored in another bucket controled by AWS, not the user."
      },
      {
        text:
          "Each object is copied multiple times and stored on the same AWS datacenter hardware as the original object."
      },
      {
        text:
          "Each object is copied once and stored within the same availibility zone as the original object."
      }
    ],
    answers: [0],
    help:
      "Amazon S3 Standard and Standard-IA copy data to several facilities in separate availability zones within the same region. This level of repliation ensures that AWS could suffer two concurrent facility outage within a region without any data being lost.",
    tags: ["aws", "storage"]
  },
  {
    question: "Which type of EBS volume does AWS specifically recemmended for use as a boot volume?",
    choices: [
      {
        text: "General Purpose SSD volume (GP2)"
      },
      {
        text: "Provisioned IOPS SSD volume (IO1)"
      },
      {
        text: "Cold HDD (SC1)"
      },
      {
        text: "Throughput Optimized HDD (ST1)"
      }
    ],
    answers: [0],
    help: "General Purpose (SSD) volumes are suitable for a broad range of workloads, including small-to-medium-sized databases, development and test environments, and boot volumes.",
    tags: ["aws", "storage", "EBS"]
  },
  {
    question: "Which of the following S3 features can noticeably increase your storage costs?",
    choices: [
      {
        text: "versioning"
      },
      {
        text: "lifecycle rules"
      },
      {
        text: "Using S3-managed encryption keys"
      },
      {
        text: "hosting static web resources on S3"
      }
    ],
    answers: [0],
    help: "Using versioning will noticeably increase your storage costs because as objects are updated, new versions of the object are created and stored in S3. Because Amazon S3 charges for storage used, your account will be billed for all object versions stored within your buckets. Using lifecycle rules to automate migration of data to Amazon Glacier or deleting dated versions after a certain point are both ways to optimize cost.",
    tags: ["aws", "storage"]
  },
  {
    question: "Which statement about EC2 instance store volumes is incorrect?",
    choices: [
      {
        text: "The storage cost is included in the EC2 instance price."
      },
      {
        text: "Instance store volumes offer very high I/O speed."
      },
      {
        text:
          "The instance store volumes reside on the same hardware as host instance."
      },
      {
        text: "The are available for all instance types."
      }
    ],
    answers: [3],
    help:
      "Even though EC2 instance store volumes are part of the EC2 instance itself, they are not available for all instance types. To see which instance types offer it, be sure to review the documentation closely.",
    tags: ["aws", "storage"]
  },
  {
    question: "What does the server-side encryption provide in Amazon S3?",
    choices: [
      {
        text:
          "Server-side encryption does not exist for Amazon S3, but only for Amazon EC2."
      },
      {
        text:
          "Server-side encryption protects data at rest using Amazon S3-managed encryption keys (SSE-S3)."
      },
      {
        text:
          "Server-side encryption allows you to upload files using an SSL endpoint for a secure transfer."
      },
      {
        text:
          "Server-side encryption provides an encrypted virtual disk in the cloud."
      }
    ],
    answers: [1],
    help:
      "Server-side encryption is about protecting data at rest. Server-side encryption with Amazon S3-managed encryption keys (SSE-S3) employs strong multi-factor encryption. Amazon S3 encrypts each object with a unique key. As an additional safeguard, it encrypts the key itself with a master key that it regulary rotates.",
    tags: ["aws", "storage"]
  },
  {
    question:
      "You are selecting data storage option for a general-purpose EC2 instance. Which of the following AWS storage services does not offer any added security controls for typical instances like this, such as data encryption or service-specific access control policies?",
    choices: [
      {
        text: "Amazon Glacier"
      },
      {
        text: "Amazon S3"
      },
      {
        text: "EC2 Instance Store Volumes"
      },
      {
        text: "Amazon EBS"
      }
    ],
    answers: [2],
    help:
      "From a security stance, instance store volumes don't offer any additional security features. As to be honest, they are not separate service like the other storage options. They are simply storage volumes attached to the same host on the EC2 instance, and they are provided as a part of the EC2 service. So, they effectively have the same security mechanisms provided by EC2. This can be IAM policies dictating which intances can and can't be launched, and what action you can perform on the EC2 instance, itself.",
    tags: ["aws", "storage"]
  },
  {
    question:
      "In AWS Storage Gateway, using a tape gateway's virtual tape library (VTL), you can cost-effectively and durably archive backup data in ______________.",
    choices: [
      {
        text: "Amazon EFS"
      },
      {
        text: "Amalzon Glacier"
      },
      {
        text: "Amazon EBS"
      },
      {
        text: "Amazon CloudFront"
      }
    ],
    answers: [1],
    help:
      "In the AWS Storage Gateway, using a tape gateway's virtual tape libray (VTL), you can cost-effectively and durably archive backup data in Amazon Glacier.",
    tags: ["aws", "storage"]
  },
  {
    question:
      "When using Amazon Glacier's bulk retrieval option, which of the following is correct?",
    choices: [
      {
        text: "Amazon Glacier takes 3-5 hours to retrieve data."
      },
      {
        text: "Amazon Glacier takes 1-5 minutes to retrieve data."
      },
      {
        text: "Amazon Glacier takes 5-12 hours to retrieve data."
      },
      {
        text: "Amazon Glacier takes 1 hour to retrieve data."
      }
    ],
    answers: [2],
    help:
      "Glacier is optimized for data that is infreuently accessed and for which retrieval times of several hours are suitable. The standard retrieval option, which is the default option, takes 3-5 hours to complete. The other options are expedited, which downloads a small amount of data (250 MB maximum) in 5 minutes,and bulk, which downloads large amount of data (petabytes) in 5-12 hours.",
    tags: ["aws", "storage"]
  },
  {
    question:
      "A user has created a new EBS volume. The user wants to mount the volume on the instance to which it is attached. Which step is required before the user can mount the volume?",
    choices: [
      {
        text: "The user must create a file system on the volume."
      },
      {
        text: "The user must resize the volume."
      },
      {
        text: "The user must run a cyclic check on the device."
      },
      {
        text: "No step is required. The user can directly mount the device."
      }
    ],
    answers: [0],
    help:
      "When a user is trying to mount a blank EBS volume, it is required that the user first create a file system within the volume.",
    tags: ["aws", "storage"]
  },
  {
    question:
      "A root AWS account owner is trying to understand various options to set the permission to Amazon S3. Which option below is not an access control mechanism in Amazon S3?",
    choices: [
      {
        text: "IAM User access policy"
      },
      {
        text: "S3 Bucket access policy"
      },
      {
        text: "S3 Bucket access control list"
      },
      {
        text: "S3 Object access policy"
      }
    ],
    answers: [3],
    help:
      "Amazon S3 provides a set of operations to work with the Amazon S3 resources. Managing S3 resource access referes to granting others permissions to work with S3. There are three ways the root account owner can define access with S3: \
    - S3 ACL: The user can use ACL to grant basic read/write permissions to other AWS accounts.\
    - S3 Bucket Policy: The policy is used to grant other AWS accounts or IAM users permissions for the bucket and the objects in it.\
    - User Access Policy: Define an IAM user and assign him the IAM policy which grants him access to S3.\
    ",
    tags: ["aws", "storage"]
  },
  {
    question:
      "How is an Amazon EFS mount target configured within your AWS infrastructure?",
    choices: [
      {
        text:
          "A mount target must be attached to an individual Amazon EC2 instance in a VPC, to attach the filesystem."
      },
      {
        text:
          "A mount target must be placed within a VPC to communicate with EC2 instances in that VPC."
      },
      {
        text:
          "A mount target must be placed within an availability zone to communicate with instanes in that availability zone."
      },
      {
        text:
          "A mount target must be placed within a subnet to communicate with instances in that subnet."
      }
    ],
    answers: [1],
    help:
      "An Amazon EFS mount target is not attached to each specific EC2 instance like an EBS volume. A mount target must be created within a VPC in order for the service to work, but it is recommended you create a mount target within each availability zone (AZ) within a VPC.\
    \
    Technically, one mount target in one availability zone will allow all EC2 instances to connect to the service, but there are additional costs when using a mount target in a different AZ.",
    tags: ["aws", "storage"]
  },
  {
    question:
      "What is the difference between S3 bucket policies and IAM policies?",
    choices: [
      {
        text: "Only IAM policies offer fine-grained access control."
      },
      {
        text:
          "Only S3 bucket policies offer or restrict cross-account access to a bucket or object."
      },
      {
        text:
          "IAM can restrict access on an object level, but bucket policies cannot."
      },
      {
        text:
          "Bucket policies can only control access to specific buckets and the objects in it."
      }
    ],
    answers: [3],
    help:
      "S3 bucket policies and IAM policies both offer fine-grained access control. It is possible to offer cross-account access via S3 bucket policies and IAM policies, although IAM requires a trust policy that is not required for S3 bucket policies. Neither bucket policies nor IAM policies can restrict access at an object level. This is only possible with Access Control List (ACL). However, bucket policies can only pertain to a specific bucket, not to all buckets for a given account, or for all buckets for all users of a specific account.",
    tags: ["aws", "storage"]
  },
  {
    question:
      "A user has launched a dedicated EBS-backed instance. You are curious where the EBS volume for this instance will be created. Which statement is correct about the EBS volume's creation?",
    choices: [
      {
        text:
          "The EBS volume will be created on the same tenant hardware assigned to the dedicated instance."
      },
      {
        text:
          "The EBS volumes will not be created on the smae tenant hardware assigned to the dedicated instance."
      },
      {
        text: "AWS does not allow a dedicated EBS-backed instance launch."
      },
      {
        text: "The user can specify where the EBS volume will be created."
      }
    ],
    answers: [1],
    help:
      "The dedicated instances are Amazon EC2 instances that run in a Virtual Private Cloud (VPC) on hardware that is dedicated to a single customer. When a user launch an Amazon EBS-backed dedicated instance, the EBS volume does not run on single-tenant hardware.",
    tags: ["aws", "storage"]
  },
  {
    question:
      "A user has moved an object to Glacier using the S3 object lifecycle rules. The user requests to restore the archive after 6 months. When the restore request is completed, the user accesses the restored object. In this scenario, which statement is incorrect?",
    choices: [
      {
        text:
          "The user needs to pay storage for both the archive and the S3 object that is temprarily restored."
      },
      {
        text: "The restored object's storage class will be S3-Standard."
      },
      {
        text:
          "The archive will be available as an bject for the duration specified by the user during the restoration request."
      },
      {
        text:
          "The user can modify the restoration period only by issuing a new restoration request with the updated period."
      }
    ],
    answers: [1],
    help:
      "The Amazon Glacier is an archival service offered by AWS. Amazon S3 provides lifecycle rules to archive and restore objects from S3 to Glacier. Once the object is archived their storage class will be changed to Glacier. If the user sends a request for restore, the storage class will still be Glacier for the restored object. The user will be paying for both the archived copy as well as for the restored object. The object is available only for the duration specified in the restoration request and if the user wants to modify that period, he has to raise another restore request with the updated duration.",
    tags: ["aws", "storage", "glacier", "s3"]
  },
  {
    question:
      "In Amazon CloudFront, when using a network of edge locations around the world, requests for your dynamic content are __________",
    choices: [
      {
        text:
          "sent to copies of your static content closer to viewers than the original content."
      },
      {
        text:
          "sent to copies of your static content in one of the edge locations to  a new edge location."
      },
      {
        text: "sent to your original servers running within or outside of AWS."
      },
      {
        text:
          "sent to the original content location in the AWS region you have chosen."
      }
    ],
    answers: [2],
    help:
      "In Amazon CloudFront, requests for your dynamic content are carried back to your origin servers running in Amazon Web Service (e.g., Amazon EC2, Elastic Load Balancing) over optimized network paths for a more reliable and consistent experience.",
    tags: ["aws", "storage", "cloudfront"]
  },
  {
    question:
      "Which type of AWS Storage Gateway offer local caches for frequently accessed data?",
    choices: [
      {
        text: "File Gateways"
      },
      {
        text: "Cached volume gateways"
      },
      {
        text: "Stored volume gateways"
      },
      {
        text: "Tape gateways"
      }
    ],
    answers: [0, 1],
    help:
      "Both file gateways and cached volume gateways provide local caches to store frequently accessed data. Stored volume gateways keep all files locally, so all stored data can be retrieved with reduced latency. Tape gaetways are an archival method, and not ideal for data that needs to be readily available.",
    tags: ["aws", "storage", "cache"]
  },
  {
    question: "What will happen if a user deletes an S3 object where versioning is enabled?",
    choices: [
      {
        text: "S3 will insert a delete marker and all the versions will remain in the bucket."
      },
      {
        text: "S3 will delete the last copy of the object, while the others remain intact."
      },
      {
        text: "S3 will delete all the versions of that object."
      },
      {
        text: "S3 will reset the version ID of the bucket and insert a delete marker that all the versions are deleted."
      }
    ],
    answers: [0],
    help: "When a user deletes an object for which versioning is enabled, S3 will set the delete marker against that object version. Consequently, all the versions will remain in the S3 bucket. The delete marker becomes the latest version. Thus, the next GET request without a version ID will be unable to retrieve the object.",
    tags: ["aws", "storage", "s3", "bucket"]
  },
  {
    question: "A user wants to enable access logging on an S3 bucket in your AWS account, to track requests to access it.  Which steps are required to set up access logging for your bucket?",
    choices: [
      {
        text: "Create an IAM Role granting write permission on the destination bucket for log storage."
      },
      {
        text: "Turn on the bucket's log delivery by adding logging configuration to the bucket."
      },
      {
        text: "Grant the Amazon S3 Log Delivery group write permission on the destination bucket for log storage."
      },
      {
        text: "Create an IAM policy for the bucket and allow log access."
      }
    ],
    answers: [1,2],
    help: "By default, logging is disabled. To enable access logging, you must do the following:\
    - Turn on the log delivery by adding logging configuration on the bucket for which you want Amazon S3 to deliver access logs. We will refer to this bucket as the source bucket.\
    - Grant the Amazon S3 Log Delivery group write permission on the bucket where you want the access logs saved. We will refer to this bucket as the target bucket.",
    tags: ["aws", "storage"]
  },
  {
    question: "In which circumstance would a bucket owner pay for the data transfers instead of the Requester Pays bucket?",
    choices: [
      {
        text: "When the request is a HTTP request"
      },
      {
        text: "When the request is a known request"
      },
      {
        text: "When the request is 202 Accepted"
      },
      {
        text: "When the request is anonymous"
      }
    ],
    answers: [3],
    help: "The charge for successful Requester Pays requests is straightforward: the requester pays for the data transfer and the request; the bucket owner pays for the data storage. However, the bucket owner is charged for the anonymous request.",
    tags: ["aws", "storage", "s3", "bucket"]
  },
  {
    question: "You are developing a new application in which you need to transfer files over long distances between client-side storage and an S3 bucket. You decide to try sending data to the S3 bucket using S3 Transfer Acceleration. What must you do to achieve this?",
    choices: [
      {
        text: "Use the CLI S3 accelerate upload commands."
      },
      {
        text: "Use the SDK S3 accelerate upload commands."
      },
      {
        text: "Use the new accelerate endpoints to transfer your data to S3."
      },
      {
        text: "Turn on S3 Transfer Acceleration for the bucket."
      }
    ],
    answers: [2,3],
    help: "After you turn on S3 Transfer Acceleration for a bucket, two new endpoints are created for the bucket: one for IPv4 and one for IPv6. You can use either the accelerate endpoints or the standard endpoints if you choose not to use the accelerate feature.",
    tags: ["aws", "storage", "s3", "bucket"]
  },
  {
    question: "By default, versioning is ____________ when an S3 bucket is created.",
    choices: [
      {
        text: "enabled for buckets in the US East (N. Virginia) region"
      },
      {
        text: "disabled only for the region where the user is located."
      },
      {
        text: "enabled for buckets in all regions"
      },
      {
        text: "disabled for buckets in all regions"
      }
    ],
    answers: [3],
    help: "A user can enable versioning with AWS S3 only at the bucket level. Versioning is disabled by default when a bucket is created.",
    tags: ["aws", "storage", "s3", "bucket"]
  },
  {
    question: "What is a canned access control list in Amazon S3?",
    choices: [
      {
        text: "a policy that is associated with an identity rather than a resource"
      },
      {
        text: "a policy that is associated with a resource rather than an identity"
      },
      {
        text: "a predefined grant that contains both grantees and permissions"
      },
      {
        text: "a list of anyone who has uploaded an object to a bucket, and thus become the owner of that object"
      }
    ],
    answers: [2],
    help: "A canned ACL is a predefined grant that contains both grantees and permissions.",
    tags: ["aws", "storage", "security", "policy"]
  },
  {
    question: "Which of the following statements about bucket access in Amazon S3 is true??",
    choices: [
      {
        text: "Once you have selected access settings for a bucket, those settings cannot be changed."
      },
      {
        text: "If a bucket has the \"block all public access\" setting enabled, and you try to allow any kind of public or cross-account access for the bucket policy or ACL, then access will not be allowed."
      },
      {
        text: "You must select at least one option for filtering public access to a bucket."
      },
      {
        text: "By default, all public access is allowed."
      }
    ],
    answers: [1],
    help: "When creating a new bucket in S3, there's an option that's dedicated to helping you protect your bucket from public \
    access. And by default, you can see that there's a checkbox that's ticked, which blocks all public access. You don't have \
    to select any options or you can have a combination of the four shown. These settings can be changed by selecting the edit \
    button. When a bucket has the \"block all public access\" setting enabled, if I tried to allow any kind of public or cross-account access for the bucket policy or ACL, then access would still not be allowed.",
    tags: ["aws", "storage", "security", "policy"]
  },
  {
    question: "Which of the following statements about access control lists in Amazon S3 is false?",
    choices: [
      {
        text: "It is not possible to implement conditional elements using ACLs."
      },
      {
        text: "It is not possible to implicitly deny access using ACLs."
      },
      {
        text: "You can use both IAM policies and bucket policies to control access."
      },
      {
        text: "ACLs are far more granular than IAM or bucket policies."
      }
    ],
    answers: [3],
    help: "You can of course use both IAM policies and bucket policies to control access. ACLs do not follow the same JSON \
    format as policies defined by IAM and bucket policies. Instead, they are far less granular, and different permissions \
    can be applied depending on whether you are applying an ACL at the bucket level or the object level. Due to the basic \
    structure of an ACL, it is not possible to implicitly deny access using ACLs. Neither are you able to implement conditional \
    elements, like we saw earlier when I mentioned identity-based access.",
    tags: ["aws", "storage", "security", "policy"]
  },
  {
    question: "_____ in Amazon S3 allows specific resources on a webpage to be requested from a different domain than its own, \
    which allows you to build client-side web applications.",
    choices: [
      {
        text: "The Access Analyzer"
      },
      {
        text: "Expose Header"
      },
      {
        text: "The canned access control list"
      },
      {
        text: "Cross-Origin Resource Sharing"
      }
    ],
    answers: [3],
    help: "At a high level, CORS allows specific resources on a webpage to be requested from a different domain than its own. \
    And this allows you to build client-side web applications.",
    tags: ["aws", "storage", "security", "policy"]
  },
  {
    question: "Which of the following statements about Allow/Deny in Amazon S3 is false?",
    choices: [
      {
        text: "By default, access is denied to an object, even without an explicit Deny within any policy."
      },
      {
        text: "If there is both a Deny and an Allow associated with the principal to a specific object, then access will be authorized."
      },
      {
        text: "If there is no Deny associated with the principal to a specific object, but there is an Allow, then access will be authorized."
      },
      {
        text: "A Deny always takes precedence over an Allow."
      }
    ],
    answers: [1],
    help: "Essentially, by default, AWS states that access is denied to an object, even without an explicit Deny within any \
    policy. To gain access, there has to be an Allow within a policy that the principal is associated to or defined by within \
    a bucket policy or ACL. If there was no Deny defined, but there is an Allow within a policy, then access will be authorized. \
    However, if there is a single Deny associated with the principal to a specific object, then even if an Allow does exist, \
    this explicit denial will always take precedence, overruling the Allow, and access will not be authorized. So as we know, \
    a Deny always takes precedence over an Allow, meaning Stuart will have access to the s3deepdive bucket to perform all S3 \
    actions apart from deleting the bucket or any of its objects.",
    tags: ["aws", "storage", "security", "policy"]
  },
  {
    question: "The key material of a AWS KMS CMK is the ____.",
    choices: [
      {
        text: "data that is used to encrypt and decrypt application data"
      },
      {
        text: "data that contains import and export information"
      },
      {
        text: "metadata with scheduling and routing information"
      },
      {
        text: "metadata that defines the type and state of the key"
      }
    ],
    answers: [0],
    help: "A customer master key (CMK) is a logical representation of a master key in AWS KMS. In addition to the master key's \
    identifiers and other metadata, including its creation date, description, and key state, a CMK contains the key material \
    used to encrypt and decrypt data. When you create a CMK, by default, AWS KMS generates the key material for that CMK. \
    However, you can choose to create a CMK without key material and then import your own key material into that CMK.",
    tags: ["aws", "storage", "security", "encryption"]
  },
  {
    question: "What action does the S3 Master Key perform in the SSE-S3 encryption and decryption process?",
    choices: [
      {
        text: "It encrypts and decrypts the object uploaded into S3"
      },
      {
        text: "It allows the user to authenticate and receive access to the related object"
      },
      {
        text: "It encrypts and decrypts the data key for the S3 object"
      },
      {
        text: "It correlates the correct each object with its specific data key"
      }
    ],
    answers: [2],
    help: "In the SSE-S3 encryption process, the Master key encrypts and decrypts the data key. The data key, in turn, \
    encrypts and decrypts the actual object stored in S3.",
    tags: ["aws", "storage", "security", "encryption"]
  },
  {
    question: "When transmitting sensitive data using encryption algorithms, ____ refers to the input to an encryption \
    algorithm, meaning that the data is in its unprotected, or unencrypted form.",
    choices: [
      {
        text: "plaintext"
      },
      {
        text: "cyphertext"
      },
      {
        text: "rawtext"
      },
      {
        text: "usertext"
      }
    ],
    answers: [0],
    help: "Plaintext refers to information or data in an unencrypted, or unprotected, form. Ciphertext refers to the output \
    of an encryption algorithm operating on plaintext. Ciphertext is unreadable without knowledge of the algorithm and a \
    secret key.",
    tags: ["aws", "storage", "security", "encryption"]
  },
  {
    question: "A user has enabled server-side encryption with S3 (SSE-S3) for an object. The user downloads the encrypted object \
    from S3. How can the user decrypt it?",
    choices: [
      {
        text: "The user needs to decrypt the object using their own account credentials."
      },
      {
        text: "S3 manages encryption and decryption automatically"
      },
      {
        text: "S3 provides an object key to decrypt the object."
      },
      {
        text: "The user must provide a KMS data key."
      }
    ],
    answers: [1],
    help: "If the user is using the server-side encryption feature, Amazon S3 encrypts the object data before saving it on \
    disks in its data centres and decrypts it when the user downloads the objects. Thus, the user is free from the tasks of \
    managing encryption, encryption keys, and related tools.",
    tags: ["aws", "storage", "security", "encryption"]
  },
  {
    question: "In the AWS Storage Gateway, _________________ is analogous to a physical tape drive that can perform I/O and \
    seek operations on a tape.",
    choices: [
      {
        text: "a Virtual tape"
      },
      {
        text: "a Virtual tape library (VTL) tape drive"
      },
      {
        text: "a Virtual tape shelf (VTS) retrieving tape"
      },
      {
        text: "a Virtual tape shelf (VTS)"
      }
    ],
    answers: [1],
    help: "In AWS Storage Gateway, Virtual tape library (VTL)  is analogous to a physical tape library available on-premises \
    with robotic arms and tape drives, as well as the collection of virtual tapes stored within. Each gateway-VTL comes with \
    one VTL. The virtual tapes that you create appear in your gateway's VTL. ",
    tags: ["aws", "storage"]
  },
  {
    question: "Which types of AWS Storage gateways have a limited amount of total storage per gateway? (Choose 2 answers)",
    choices: [
      {
        text: "Stored Volume gateway"
      },
      {
        text: "File gateway"
      },
      {
        text: "Cached Volume gateway"
      },
      {
        text: "Tape gateway"
      }
    ],
    answers: [0,2],
    help: "File gateways and tape gateways are directly connected to Amazon S3, and Amazon Glacier by extension. As such, each \
    gateway has unlimited total storage capacity, although other factors limit the workload these gateways can support.\
    Volume gateways, as the name implies, are stored on block storage volumes, similar to Amazon EBS. The volumes offer a \
    limited amount of storage, even though the volumes can be stored in Amazon S3.",
    tags: ["aws", "storage"]
  },
  {
    question: "Can a user control the access permissions to a specific object, without affecting access to the bucket in \
    which it is contained, or changing any user policies?",
    choices: [
      {
        text: "No, a user cannot control access to a specific Amazon S3 object in this way."
      },
      {
        text: "Yes, a  user can apply S3 object access control lists (ACLs) to the object."
      },
      {
        text: "Yes, a user can apply an IAM policy to the object."
      },
      {
        text: "Yes, a user can apply a bucket policy to only the object."
      }
    ],
    answers: [1],
    help: "Bucket policies provide centralized, access control to buckets and objects based on a variety of conditions, including \
    Amazon S3 operations, requesters, resources, and aspects of the request (e.g., IP address). If a user needs to apply a \
    policy on individual objects, he should use the access control lists, which can add (grant) permissions only on individual \
    objects, policies can either add or deny permissions across all (or a subset) of objects within a bucket. With one request \
    an account can set the permissions of any number of objects in a bucket.",
    tags: ["aws", "storage"]
  },
  {
    question: "In AWS Storage Gateway, the data written to your stored volumes is stored on your on-premises storage hardware \
    and asynchronously backed up to ____________________.",
    choices: [
      {
        text: "Amazon EBS in the form of Amazon S3 snapshots"
      },
      {
        text: "Amazon S3 in the form of Amazon S3 replicas"
      },
      {
        text: "Amazon EBS in the form of Amazon EC2 images"
      },
      {
        text: "Amazon S3 in the form of Amazon EBS snapshots"
      }
    ],
    answers: [3],
    help: "In AWS Storage Gateway, data written to your gateway-stored volumes is stored on your on-premises storage hardware and \
    asynchronously backed up to Amazon S3 in the form of Amazon EBS snapshots.",
    tags: ["aws", "storage"]
  },
  {
    question: "In AWS Storage Gateway, each gateway-VTL is preconfigured with ______________, which are available to your existing \
    client backup applications as iSCSI devices.",
    choices: [
      {
        text: "a digital changer and iSCSI drives"
      },
      {
        text: "a media changer and tape drives"
      },
      {
        text: "a digital changer and tape drives"
      },
      {
        text: "a media changer and iSCSI drives"
      }
    ],
    answers: [1],
    help: "Gateway-VTL offers a durable, cost-effective solution to archive your data in the AWS cloud. In AWS Storage Gateway, \
    each gateway-VTL is preconfigured with a media changer and tape drives, which are available to your existing client backup \
    applications as iSCSI devices. You add tape cartridges as you need to archive you data.",
    tags: ["aws", "storage"]
  },
  {
    question: "Which of the following statements is true regarding GLACIER storage class?",
    choices: [
      {
        text: "Deleting data that is archived to Amazon Glacier will be charged if the objects you delete are archived for \
        three months or longer."
      },
      {
        text: "Amazon Glacier is not a long-term archival solution."
      },
      {
        text: "Amazon Glacier is a long-term archival solution."
      },
      {
        text: "If you delete or overwrite an object within three months of archiving it, you will not be charged for the \
        early deletion."
      }
    ],
    answers: [2],
    help: "Amazon Glacier is a long-term archival solution. Deleting data that is archived to Amazon Glacier is free if the \
    objects you delete are archived for three months or longer. If you delete or overwrite an object within three months of \
    archiving it, Amazon S3 charges a prorated early deletion fee.",
    tags: ["aws", "storage"]
  },
  {
    question: "When using EFS,  it's generally recommended that you implement __________________ to help you reduce your \
    file system costs.",
    choices: [
      {
        text: "Lefecycle policies"
      },
      {
        text: "CloudWatch logs"
      },
      {
        text: "AWS Backup"
      },
      {
        text: "Provisioned throughput"
      }
    ],
    answers: [0],
    help: "In a way, Amazon EFS offers simpler cost options over Amazon S3, largely due to the fact that there are fewer \
    storage classes and no charges for data retrieval. In the interest of cost-optimization, it's generally recommended that \
    you implement the lifecycle policies to help you reduce your file system costs by moving data between standard and the \
    infrequent access storage classes as the majority of files are accessed rarely with only a small percentage of files being \
    accessed regularly. ",
    tags: ["aws", "storage"]
  },
  {
    question: "An AWS account will be charged for which of the following data transfer types using Amazon S3?",
    choices: [
      {
        text: "Data transferred out to EC2 instances in the same region"
      },
      {
        text: "Data transferred into Amazon S3 from the internet"
      },
      {
        text: "Data transferred out to Amazon CloudFront"
      },
      {
        text: "Data transferred from Amazon S3 to another AWS region"
      }
    ],
    answers: [3],
    help: "All of the listed data transfers are free except transferring Amazon S3 data from one region to another.",
    tags: ["aws", "storage"]
  },
  {
    question: "Where does Amazon EFS store its data?",
    choices: [
      {
        text: "A cache"
      },
      {
        text: "A volume"
      },
      {
        text: "A bucket"
      },
      {
        text: "A file system"
      }
    ],
    answers: [3],
    help: "Amazon EFS is similar to on-premise network attached storage, in contrast to EBS and EC2 instance store, which \
    offer virtual directly attached storage, and Amazon S3, which offers internet accessible object storage with a flat \
    structure.",
    tags: ["aws", "storage"]
  },
  {
    question: "Which statement about Amazon EFS is incorrect?",
    choices: [
      {
        text: "Amazon EFS support Linux and Windows instances."
      },
      {
        text: "Amazon EFS is compatible with Network File System version 4.0 and 4.1 protocol only"
      },
      {
        text: "Amazon EFS integrates with AWS Key Management Service (KMS)"
      },
      {
        text: "Amazon EFS offers a shared filesystem for EC2 instances"
      }
    ],
    answers: [3],
    help: "All the statements are correct except Amazon EFS is not compatible with Windows operating systems at this time.",
    tags: ["aws", "storage"]
  },
  {
    question: "Which of the following rules must be added to a mount target security group to access Amazon Elastic File \
    System (EFS) from an on-premises server? ",
    choices: [
      {
        text: "Set up a Point-To-Point Tunneling Protocol Server (PPTP) to allow secure connection."
      },
      {
        text: "Permit secure traffic to the Kerberos port 88 from the on-premises server."
      },
      {
        text: "Allow inbound traffic to the Network File System (NFS) port (2049) from the on-premises server."
      },
      {
        text: "Configure an NFS proxy between Amazon EFS and the on-premises server to route traffic."
      }
    ],
    answers: [2],
    help: "By mounting an Amazon EFS file system on an on-premises server, on-premises data can be migrated into the AWS \
    Cloud. Any one of the mount targets in your VPC can be used as long as the subnet of the mount target is reachable by \
    using the AWS Direct Connect connection. To access Amazon EFS from an on-premises server, a rule must be added to the \
    mount target security group to allow inbound traffic to the NFS port (2049) from the on-premises server.",
    tags: ["aws", "storage"]
  },
  {
    question: "Which statement below best describes the service Amazon Elastic File System (EFS) provides?",
    choices: [
      {
        text: "It provides visualization tools and wizards for creating machine learning models."
      },
      {
        text: "It allows data to be accessed anywhere through an Internet Application Program Interface (API)."
      },
      {
        text: "It offloads the administrative burdens of operating and scaling object storage in AWS."
      },
      {
        text: "It offers concurrently-accessible storage for thousands of Amazon Elastic Compute Cloud (EC2) instances."
      }
    ],
    answers: [3],
    help: "Amazon EFS is a file storage service used with Amazon EC2. It is designed to be highly durable and available. It \
    provides a file system interface, file system access semantics such as file locking and strong consistency, and \
    concurrently-accessible storage for up to thousands of Amazon EC2 instances.",
    tags: ["aws", "storage"]
  },
  {
    question: "In Elastic Beanstalk, which of the following refers to a collection of AWS resources running an application version?",
    choices: [
      {
        text: "An environment"
      },
      {
        text: "An application"
      },
      {
        text: "A configuration template"
      },
      {
        text: "An application version"
      }
    ],
    answers: [0],
    help: "An environment is a collection of AWS resources running an application version. Each environment runs only one \
    application version at a time, however, you can run the same application version or different application versions in many \
    environments simultaneously. When you create an environment, Elastic Beanstalk provisions the resources needed to run the \
    application version you specified.",
    tags: ["aws", "compute"]
  },
  {
    question: "Which component of AWS Batch sets parameters for a job, including how it is run, and what resource configurations \
    will be required?",
    choices: [
      {
        text: "a compute environment"
      },
      {
        text: "a job scheduler"
      },
      {
        text: "a job definition"
      },
      {
        text: "a job queue"
      }
    ],
    answers: [2],
    help: "Job definitions are specific parameters for the jobs themselves. They dictate how the job will run and with what \
    configuration. Some example of these may be how many vCPUs to use for the container, which data volume should be used, \
    which IAM Role should be used allowing access for AWS Batch to communicate with other AWS services, and which mount points \
    to use.",
    tags: ["aws", "compute"]
  },
  {
    question: "Which instance family provides access to graphics processing units (GPUs) and field programmable gate arrays (FPGAs)?",
    choices: [
      {
        text: "Memory Optimized"
      },
      {
        text: "Storage Optimized"
      },
      {
        text: "Accelerated Computing"
      },
      {
        text: "General Purpose"
      }
    ],
    answers: [2],
    help: "If you require high processing capability, you'll benefit from using accelerated computing instances, which provide \
    access to hardware-based compute accelerators such as Graphics Processing Units (GPUs) or Field Programmable Gate Arrays \
    (FPGAs). Accelerated computing instances enable more parallelism for higher throughput on compute-intensive workloads.",
    tags: ["aws", "compute"]
  },
  {
    question: "Which of the following statements is true of event sources?",
    choices: [
      {
        text: "Event sources provide the location of the files for execution."
      },
      {
        text: "Event sources invoke alternate functions when the Lambda function fails."
      },
      {
        text: "Event sources publish events that cause the Lambda function to be invoked."
      },
      {
        text: "Event sources terminate instances that are no longer able to work and are marked unhealthy."
      }
    ],
    answers: [2],
    help: "Event sources publish events that cause the Lambda function to be invoked.",
    tags: ["aws", "compute"]
  },
  {
    question: "What is a unit of work for AWS Batch to complete?",
    choices: [
      {
        text: "a task"
      },
      {
        text: "a version"
      },
      {
        text: "a function"
      },
      {
        text: "a job"
      }
    ],
    answers: [3],
    help: "A unit of work in AWS Batch is known as a job. It can be in one of several states: submitted, pending, running or failed.",
    tags: ["aws", "compute"]
  },
  {
    question: "What is the difference between Amazon Elastic Container Service (ECS) and Amazon Elastic Container Registry (ECR)?",
    choices: [
      {
        text: "ECR stores Docker images to be deployed by ECS."
      },
      {
        text: "ECR is a failover and backup service for ECS clusters."
      },
      {
        text: "ECR is a central data storage service for stateless ECS clusters."
      },
      {
        text: "ECR manages EC2 instances and Docker containers deployed by ECS."
      }
    ],
    answers: [0],
    help: "Elastic Container Registry is a secure location to store and manage Docker images. It is a fully managed service. \
    Elastic Container Service can pull images from registries withing ECR and deploy them within ECS clusters.",
    tags: ["aws", "compute"]
  },
  {
    question: "You want to have multiple versions of your application running at the same time, with all versions launched via AWS Elastic Beanstalk. Is this possible?",
    choices: [
      {
        text: "No. AWS Elastic Beanstalk is not designed to support multiple running environments"
      },
      {
        text: "Yes. However AWS Elastic Beanstalk is designed to support only 2 multiple running environments"
      },
      {
        text: "No. However if you have 2 AWS accounts this can be done"
      },
      {
        text: "Yes. AWS Elastic Beanstalk is designed to support a number of multiple running environments"
      }
    ],
    answers: [3],
    help: "AWS Elastic Beanstalk is designed to support multiple running environments. As an example you could have one for \
    integration testing, one for pre-production, and one for production, with each environment independently configured and \
    running on its own separate AWS resources. ",
    tags: ["aws", "compute"]
  },
  {
    question: "What is a Lambda function?",
    choices: [
      {
        text: "Compiled code that AWS Lambda runs when invoked"
      },
      {
        text: "An AWS service which Lambda monitors for specific operations"
      },
      {
        text: "An AWS service operation that invokes a function"
      },
      {
        text: "AWS tools and/or entities required for a function to execute its code"
      }
    ],
    answers: [0],
    help: "A Lambda function is essentially your code uploaded to AWS Lambda, which runs automatically when invoked.",
    tags: ["aws", "compute"]
  },
  {
    question: "With AWS Lambda, you pay for ____.",
    choices: [
      {
        text: "networking capacity by the hour"
      },
      {
        text: "compute time that you consume"
      },
      {
        text: "storage capacity you use"
      },
      {
        text: "number of compute resources you use"
      }
    ],
    answers: [1],
    help: "You pay only for the compute time you consume – there is no charge when your code is not running.",
    tags: ["aws", "compute"]
  },
  {
    question: "Reviewing Amazon Lightsail's ___________________ allows you to control ports for acceptable connections.",
    choices: [
      {
        text: "networking tab"
      },
      {
        text: "metrics tab"
      },
      {
        text: "storage tab"
      },
      {
        text: "snapshot tab"
      }
    ],
    answers: [0],
    help: "The Networking tab allows you to view your IP address information, along with a very simple, virtual firewall, \
    allowing you to control from which ports your instance can accept connections.",
    tags: ["aws", "compute"]
  },
  {
    question: "Which of the following statements best describes Amazon EC2 Container Service (ECS)?",
    choices: [
      {
        text: "It is a highly scalable, high performance container management service that supports Docker containers."
      },
      {
        text: "It is an AWS software performance management support package for EC2 instances."
      },
      {
        text: "It is a cloud monitoring tool that utilizes Docker vaults for better performance."
      },
      {
        text: "It is an AWS feature that allows you to contain the cost of running your EC2 instances."
      }
    ],
    answers: [0],
    help: "Amazon EC2 Container Service (ECS) is a highly scalable, high performance container management service. It also \
    supports Docker containers that  allows you to easily run applications on a managed cluster of Amazon EC2 instances.",
    tags: ["aws", "compute"]
  },
  {
    question: "What statement describes the correct relationship between ECR components?",
    choices: [
      {
        text: "An ECR registry contains multiple repositories, which contain multiple Docker images."
      },
      {
        text: "An ECR repository contains multiple registries, which contain multiple EC2 instances."
      },
      {
        text: "An ECR registry contains multiple Docker images, which contain multiple containers."
      },
      {
        text: "An ECR repository contains ECS clusters, which contain multiple Docker images."
      }
    ],
    answers: [0],
    help: "The correct statement is that ECR registries contain multiple repositories, which contain multiple Docker images.",
    tags: ["aws", "compute"]
  },
  {
    question: "Which AWS service enables AWS users to run containers on Amazon ECS without provisioning and managing the host EC2 instances?",
    choices: [
      {
        text: "AWS Fargate"
      },
      {
        text: "AWS Auto Scaling"
      },
      {
        text: "AWS OpsWorks Chef"
      },
      {
        text: "AWS Systems Manager"
      }
    ],
    answers: [0],
    help: "When using the Fargate launch type with tasks within your cluster, Amazon ECS manages your cluster resources.",
    tags: ["aws", "compute"]
  },
  {
    question: "Permissions for AWS Lambda-based applications can be managed by the ____ or the ____.",
    choices: [
      {
        text: "IAM role; Lambda Function policy"
      },
      {
        text: "Execution role; Event Source role"
      },
      {
        text: "Execution policy; Event Source policy"
      },
      {
        text: "Lambda Function role; Lambda Function policy"
      }
    ],
    answers: [0],
    help: "Permissions for AWS Lambda-based applications can be managed by IAM or Execution role or Lambda function policy.",
    tags: ["aws", "compute"]
  },
  {
    question: "____ instances in Amazon EC2 provide a balance of compute, memory, and network resources for common application deployments, such as simple websites, development environments, and code repositories.",
    choices: [
      {
        text: "Compute Optimized"
      },
      {
        text: "Memory Optimized"
      },
      {
        text: "General Purpose"
      },
      {
        text: "Accelerated Computing"
      }
    ],
    answers: [3],
    help: "General Purpose instances provide a balance of compute, memory, and network resources, and are a good choice for \
    many applications. Common use cases are websites and web applications, development environments, build servers, code \
    repositories, micro services, test and staging environments, and line of business applications.",
    tags: ["aws", "compute"]
  },
  {
    question: "Regarding Amazon EC2 reserved instances, which payment options divide the remaining balance in monthly increments over the agreed term? (Choose 2 answers)",
    choices: [
      {
        text: "No upfront"
      },
      {
        text: "All upfront"
      },
      {
        text: "Partial upfront"
      },
      {
        text: "All Upfront - prorate"
      }
    ],
    answers: [0,2],
    help: "You can choose between 3 payment options: All Upfront, Partial Upfront, and No Upfront. If you choose the Partial \
    or No Upfront payment option, the remaining balance will be due in monthly increments over the term.",
    tags: ["aws", "compute"]
  },
  {
    question: "Regarding AWS Elastic Beanstalk, _________ identifies a collection of parameters and settings that define how an environment and its associated resources behave.",
    choices: [
      {
        text: "An application"
      },
      {
        text: "An environment configuration"
      },
      {
        text: "An application Version"
      },
      {
        text: "An environment"
      }
    ],
    answers: [1],
    help: "In AWS Elastic Beanstalk, an environment configuration identifies a collection of parameters and settings that define \
    how an environment and its associated resources behave. When you update an environment’s configuration settings, AWS \
    Elastic Beanstalk automatically applies the changes to existing resources or deletes and deploys new resources (depending \
      on the type of change).",
    tags: ["aws", "compute"]
  },
  {
    question: "Which statement regarding Amazon ECS is correct?",
    choices: [
      {
        text: "ECS now manages all EC2 instances for ECS clusters. If you wish to manage instances yourself, you may deploy IaaS EC2 instances and install and run Docker directly."
      },
      {
        text: "ECS can manage all EC2 instances for all ECS clusters, but also allows you to manage instances directly through the ECS service."
      },
      {
        text: "When deploying ECS clusters, an AWS user must always manage the EC2 instances directly."
      },
      {
        text: "Amazon ECS can manage instances through multiple integrated AWS services, including OpsWorks, Beanstalk and Systems Manager."
      }
    ],
    answers: [1],
    help: "Amazon ECS allows you two deployment options, a Fargate launch and an EC2 launch. In a Fargate launch, the user \
    defines the service requirements, and the service manages the rest. In an EC2 launch, the user is responsible for patching \
    and scaling instances, and must specify the instance type and number of containers in a cluster.",
    tags: ["aws", "compute"]
  },
  {
    question: "An AWS Elastic Beanstalk _________ is a logical collection of AWS Elastic Beanstalk components, including environments, versions, and environment configurations.",
    choices: [
      {
        text: "endpoint"
      },
      {
        text: "version"
      },
      {
        text: "workflow"
      },
      {
        text: "application"
      }
    ],
    answers: [3],
    help: "An AWS Elastic Beanstalk application is a logical collection of AWS Elastic Beanstalk components, including \
    environments, versions, and environment configurations. In AWS Elastic Beanstalk, an application is conceptually similar \
    to a folder.",
    tags: ["aws", "compute"]
  },
  {
    question: "What do ECR repository policies control? (Choose 2 answers)",
    choices: [
      {
        text: "User access to the ECR repositories"
      },
      {
        text: "User actions within an ECR repository"
      },
      {
        text: "Authenticate AWS users to communicate with Docker CLI"
      },
      {
        text: "User actions with ECS clusters"
      }
    ],
    answers: [0,1],
    help: "IAM policies control access to ECR a service, but repository policies control what actions (read/write) can be \
    performed within an ECR repository",
    tags: ["aws", "compute"]
  },
  {
    question: "What is a Lambda function event source?",
    choices: [
      {
        text: "Compiled code that AWS Lambda runs when invoked"
      },
      {
        text: "An AWS service which Lambda monitors for specific operations"
      },
      {
        text: "An AWS service operation that invokes a function"
      },
      {
        text: "AWS tools and/or entities required for a function to execute its code"
      }
    ],
    answers: [1],
    help: "An Lambda function event source is an AWS service Lambda monitors for specific operations, such as Amazon S3 and Amazon SQS.",
    tags: ["aws", "compute"]
  },
  {
    question: "When processing a job, a managed compute environment in AWS Batch automatically handles which aspects of the job? (Choose 3 answers)",
    choices: [
      {
        text: "job configuration"
      },
      {
        text: "resource provisioning"
      },
      {
        text: "resource scaling"
      },
      {
        text: "job termination"
      }
    ],
    answers: [1,2,3],
    help: "A managed environment means that the service itself will handle provisioning, scaling and termination of your \
    compute instances based on configuration premises that you would enter regarding instance type and purchase method such \
    as On-demand or Spot instances. This environment is then created as an Amazon ECS Cluster. ",
    tags: ["aws", "compute"]
  },
  {
    question: "Which Amazon EC2 instance family is ideal for applications that manage real-time unstructured data processing, or distributed web cache stores?",
    choices: [
      {
        text: "Memory-optimized"
      },
      {
        text: "Compute-optimized"
      },
      {
        text: "Storage-optimized"
      },
      {
        text: "General Purpose"
      }
    ],
    answers: [0],
    help: "Memory-optimized instance types are primarily used for large-scale, enterprise-class, in-memory applications, such \
    as performing real-time processing of unstructured data or for in-memory databases such as SAP HANA.",
    tags: ["aws", "compute"]
  },
  {
    question: "Which storage option is hosted by Amazon EC2 instances themselves?",
    choices: [
      {
        text: "Amazon Instance Store Volumes"
      },
      {
        text: "Amazon EBS"
      },
      {
        text: "Amazon S3"
      },
      {
        text: "Amazon EFS"
      }
    ],
    answers: [0],
    help: "Amazon EC2 supports the following storage options: \
      1. Amazon Elastic Block Store (Amazon EBS) \
      2. Amazon EC2 Instance Store \
      3. Amazon Simple Storage Service (Amazon S3) \
      4. Amazon Elastic File System (EFS)\
    However, only Instance Store Volumes are hosted by and included as part of the EC2 service itself.",
    tags: ["aws", "compute"]
  },
  {
    question: "Persistent block storage for Amazon EC2 instances known as ____________________ is independent from the lifecycle of an associated instance.",
    choices: [
      {
        text: "Amazon FSx file servers"
      },
      {
        text: "EC2 Instance store"
      },
      {
        text: "EFS file systems"
      },
      {
        text: "EBS volumes"
      }
    ],
    answers: [3],
    help: "Amazon Elastic Block Store (Amazon EBS) provides block level storage volumes for use with EC2 instances. EBS volumes \
    are highly available and reliable storage volumes that can be attached to any running instance in the same Availability \
    Zone. EBS volumes that are attached to an EC2 instance are exposed as storage volumes that persist independently from the \
    life of the instance.",
    tags: ["aws", "compute"]
  },
  {
    question: "Can a user configure TLS with Elastic Load Balancing?",
    choices: [
      {
        text: "Yes, by installing the SSL certificate on ELB"
      },
      {
        text: "No"
      },
      {
        text: "Yes, but only for internal load balancers"
      },
      {
        text: "Yes, but only at the EC2 instance level"
      }
    ],
    answers: [0],
    help: "Elastic Load Balancing supports the HTTPS termination at the ELB level as well as the instance level. The user can \
    upload SSL certificate on ELB to configure the SSL/TLS with ELB.",
    tags: ["aws", "compute", "load", "balancer"]
  },
  {
    question: "When utilizing Auto Scaling, what step precedes the configuration of an Auto Scaling group?",
    choices: [
      {
        text: "Creating the Auto Scaling tags"
      },
      {
        text: "Creating the Auto Scaling policy"
      },
      {
        text: "Creating the Auto Scaling launch configuration or launch template"
      },
      {
        text: "Creating the Auto Scaling instance"
      }
    ],
    answers: [2],
    help: "The Auto Scaling launch config is the first step that should be run before a user can create an Auto Scaling group. \
    The launch config has all the information, such as the instance type, AMI ID, and other instance launch parameters. The \
    Auto Scaling group uses this launch config to create a new group.",
    tags: ["aws", "compute", "load", "balancer"]
  },
  {
    question: "Which of the following does Elastic Load Balancing use to determine whether or not an instance is functioning properly and can process incoming requests?",
    choices: [
      {
        text: "Instance Status Checks"
      },
      {
        text: "Configuration checks"
      },
      {
        text: "CloudWatch checks"
      },
      {
        text: "Health checks"
      }
    ],
    answers: [3],
    help: "Auto Scaling determines the health status of an instance using EC2 status checks, ELB health checks, and Custom \
    health checks.",
    tags: ["aws", "compute", "load", "balancer"]
  },
  {
    question: "A user is configuring an Application Load Balancer. Which of the choices below allows the user to route traffic to instances irrespective of the availability zone instance count?",
    choices: [
      {
        text: "Cross-zone load balancing"
      },
      {
        text: "Round Robin"
      },
      {
        text: "Sticky Session"
      },
      {
        text: "Internal load balancing"
      }
    ],
    answers: [3],
    help: "Elastic Load Balancing provides the option to either enable or disable cross-zone load balancing for the load \
    balancer. With cross-zone load balancing, the load balancer nodes route traffic to the back-end instances across all \
    the Availability Zones.  ",
    tags: ["aws", "compute", "load", "balancer"]
  },
  {
    question: "In Elastic Beanstalk, which of the following refers to a collection of AWS resources running an application version?",
    choices: [
      {
        text: "A configuration template"
      },
      {
        text: "An environment"
      },
      {
        text: "An application version"
      },
      {
        text: "An application"
      }
    ],
    answers: [1],
    help: "An environment is a collection of AWS resources running an application version. Each environment runs only one \
    application version at a time, however, you can run the same application version or different application versions in \
    many environments simultaneously. When you create an environment, Elastic Beanstalk provisions the resources needed to \
    run the application version you specified.",
    tags: ["aws", "compute", "beanstalk"]
  },
  {
    question: "Regarding AWS Elastic Beanstalk, _________ identifies a collection of parameters and settings that define how an environment and its associated resources behave.",
    choices: [
      {
        text: "An environment configuration"
      },
      {
        text: "An application Version"
      },
      {
        text: "An application"
      },
      {
        text: "An environment"
      }
    ],
    answers: [0],
    help: "In AWS Elastic Beanstalk, an environment configuration identifies a collection of parameters and settings that define \
    how an environment and its associated resources behave. When you update an environment’s configuration settings, AWS Elastic \
    Beanstalk automatically applies the changes to existing resources or deletes and deploys new resources (depending on the \
      type of change).",
    tags: ["aws", "compute", "beanstalk"]
  },
  {
    question: "In Elastic Beanstalk, which of the following refers to a specific, labeled iteration of deployable code for a web application?",
    choices: [
      {
        text: "An application version"
      },
      {
        text: "A copyright"
      },
      {
        text: "An environment"
      },
      {
        text: "An environment configuration"
      }
    ],
    answers: [0],
    help: "In Elastic Beanstalk, an application version refers to a specific, labeled iteration of deployable code for a web application. ",
    tags: ["aws", "compute", "beanstalk"]
  },
  {
    question: "AWS Elastic Beanstalk supports _________ per environment.",
    choices: [
      {
        text: "two Auto Scaling groups"
      },
      {
        text: "one Auto Scaling group"
      },
      {
        text: "five Auto Scaling groups"
      },
      {
        text: "three Auto Scaling groups"
      }
    ],
    answers: [1],
    help: "In AWS Elastic Beanstalk, one environment cannot support two different environment tiers because each requires its \
    own set of resources; a worker environment tier and a web server environment tier each require an Auto Scaling group, but \
    AWS Elastic Beanstalk supports only one Auto Scaling group per environment.",
    tags: ["aws", "compute", "beanstalk"]
  },
  {
    question: "In AWS Elastic Beanstalk, AWS resources created for a web server environment tier include _______, an Auto Scaling group, and _______________.",
    choices: [
      {
        text: "one elastic load balancer; one or more Amazon EC2 instances"
      },
      {
        text: "two elastic load balancers; one IAM role"
      },
      {
        text: "one IAM role; one Amazon SQS queue"
      },
      {
        text: "two or more elastic load balancers; one Amazon SQS queue"
      }
    ],
    answers: [3],
    help: "In AWS Elastic Beanstalk, the environment is the heart of the application. When you create an environment, AWS \
    Elastic Beanstalk provisions the resources required to run your application. AWS resources created for an environment \
    include one elastic load balancer, an Auto Scaling group, and one or more Amazon EC2 instances.",
    tags: ["aws", "compute", "beanstalk"]
  },
  {
    question: "An AWS Lambda function _____ is an operation from an event source that causes the function to invoke.",
    choices: [
      {
        text: "trigger"
      },
      {
        text: "log"
      },
      {
        text: "stream"
      },
      {
        text: "event"
      }
    ],
    answers: [0],
    help: "A trigger is essentially an operation from an event source that causes the function to invoke, and so essentially is triggering that function.",
    tags: ["aws", "compute", "lambda"]
  },
  {
    question: "Which policy determines what resources an AWS Lambda function role has access to when the function is being run?",
    choices: [
      {
        text: "role execution policy"
      },
      {
        text: "access policy"
      },
      {
        text: "Lambda policy"
      },
      {
        text: "function policy"
      }
    ],
    answers: [0],
    help: "Role execution policies determine what resources the function role has access to when the function is being run. \
    And the function policy defines which AWS resources are allowed to invoke your function.",
    tags: ["aws", "compute", "lambda"]
  },
  {
    question: "How can you change between different versions of an AWS Lambda function?",
    choices: [
      {
        text: "by assigning each version a concurrency limit of zero"
      },
      {
        text: "by using the Lambda qualifiers section"
      },
      {
        text: "by selecting the Throttle option"
      },
      {
        text: "by creating an environment variable for each version"
      }
    ],
    answers: [1],
    help: "Using the Lambda qualifiers section allows you to change between different versions of your function.",
    tags: ["aws", "compute", "lambda"]
  },
  {
    question: "Which AWS Lambda function metric counts the number of failed invocations of the function?",
    choices: [
      {
        text: "Errors"
      },
      {
        text: "Throttles"
      },
      {
        text: "UnreservedConcurrentExecutions"
      },
      {
        text: "Dead Letter Errors"
      }
    ],
    answers: [0],
    help: "Errors: This metric counts the number of failed invocations of the function, for example, the result of a permissions error.",
    tags: ["aws", "compute", "lambda"]
  },
  {
    question: "AWS Lambda needs _____ permissions to your deployment package to import your code.",
    choices: [
      {
        text: "global write"
      },
      {
        text: "global read and write"
      },
      {
        text: "global read"
      },
      {
        text: "local read and write"
      }
    ],
    answers: [2],
    help: "You can import code into Lambda by creating a deployment package, and Lambda will need global read permissions to \
    your deployment package to perform the import function.",
    tags: ["aws", "compute", "lambda"]
  },
  {
    question: "Which type of scaling increases the quantity of your current Amazon RDS instance?",
    choices: [
      {
        text: "vertical"
      },
      {
        text: "horizontal"
      },
      {
        text: "inverse"
      },
      {
        text: "diagonal"
      }
    ],
    answers: [1],
    help: "Vertical scaling will enhance the performance of your database instance. An example is scaling up from an m4.large \
    to an m4.2xlarge. Horizontal scaling will result in an increase in the quantity of your current instance.",
    tags: ["aws", "database"]
  },
  {
    question: "In the AWS API/CLI, a Redis shard is referred to as a(n) ____.",
    choices: [
      {
        text: "node group"
      },
      {
        text: "availability zone"
      },
      {
        text: "cluster"
      },
      {
        text: "instance ring"
      }
    ],
    answers: [0],
    help: "In the AWS API/CLI, a Redis shard is referred to as a node group; it is a grouping of one to six related nodes.",
    tags: ["aws", "database"]
  },
  {
    question: "In Amazon RDS, security groups are ideally used to:",
    choices: [
      {
        text: "Define maintenance period for database engines"
      },
      {
        text: "Launch Amazon RDS instances in a subnet"
      },
      {
        text: "Create, describe, modify, and delete DB instances"
      },
      {
        text: "Control what incoming requests can connect to your databases on a DB instance"
      }
    ],
    answers: [3],
    help: "n Amazon RDS, security groups are used to control what IP addresses or EC2 instances can connect to your databases \
    on a DB instance.\
    When you first create a DB instance, its firewall prevents any database access except through rules specified by an \
    associated security group.",
    tags: ["aws", "database"]
  },
  {
    question: "What is an Elasticache cache node?",
    choices: [
      {
        text: "a fixed-sized chunk of secure, network-attached RAM"
      },
      {
        text: "a group of at least 60 Memcached shards"
      },
      {
        text: "a group of at least 90 Redis shards"
      },
      {
        text: "a parameter group that contains configurational settings about your engine"
      }
    ],
    answers: [0],
    help: "A cache node is a fixed-sized chunk of secure, network-attached RAM, essentially the building block of the \
    ElastiCache service, and supports a clustered configuration.",
    tags: ["aws", "database"]
  },
  {
    question: "A _____ for a VPC is a collection of subnets (typically private) that you may want to designate for your backend \
    RDS DB Instances.",
    choices: [
      {
        text: "database internet gateway (DIG)"
      },
      {
        text: "database route table group"
      },
      {
        text: "database subnet group"
      },
      {
        text: "database options group"
      }
    ],
    answers: [2],
    help: "A DB subnet group is a collection of subnets (typically private) that you create in a VPC and that you then designate \
    for your DB instances. A DB subnet group allows you to specify a particular VPC when creating DB instances using the CLI or \
    API. Amazon RDS uses that DB subnet group and your preferred Availability Zone to select a subnet and an IP address within \
    that subnet to associate with your DB instance.",
    tags: ["aws", "database"]
  },
  {
    question: "Each Neptune database cluster maintains a separate copy of the virtual database cluster volume in at least _____ different availability zones.",
    choices: [
      {
        text: "3"
      },
      {
        text: "5"
      },
      {
        text: "10"
      },
      {
        text: "20"
      }
    ],
    answers: [0],
    help: "To ensure high availability is factored into Neptune, each cluster maintains a separate copy of the shared volume in \
    at least three different availability zones.",
    tags: ["aws", "database"]
  },
  {
    question: "An in-memory cache is generally used to improve _____.",
    choices: [
      {
        text: "write-only performance"
      },
      {
        text: "read-only performance"
      },
      {
        text: "both read and write performance"
      },
      {
        text: "the space efficiency of your database"
      }
    ],
    answers: [1],
    help: "A common scenario is to have a web application that reads and writes data to persistent storage--for example, to a \
    relational database such as RDS or a NoSQL database such as DynamoDB. This is where an in-memory cache is useful. It's \
    generally used to improve read-only performance.",
    tags: ["aws", "database"]
  },
  {
    question: "Which of the following statements about Amazon Neptune is not true?",
    choices: [
      {
        text: "It uses its own graph database engine."
      },
      {
        text: "It supports the Apache Tinkerpop Gremlin query framework."
      },
      {
        text: "It supports the WWW Sparql query framework."
      },
      {
        text: "It supports SQL queries."
      }
    ],
    answers: [3],
    help: "Amazon Neptune uses its own graph database engine and supports two graph query frameworks. One of these is Apache \
    Tinkerpop Gremlin, and this allows you to query your graph running on your Neptune database, using the Gremlin traversal \
    language. And we have the Worldwide Web Consortium Sparql.",
    tags: ["aws", "database"]
  },
  {
    question: "With regard to database storage, what does IOPS stand for?",
    choices: [
      {
        text: "input and output PostgreSQL"
      },
      {
        text: "input and output operations per second"
      },
      {
        text: "input and output processing speed"
      },
      {
        text: "input and output posts per second"
      }
    ],
    answers: [1],
    help: "If we look at the Provisioned IOPS, we can define the allocated storage and then also the number of IOPS as well, \
    which is the input and output operations per second.",
    tags: ["aws", "database"]
  },
  {
    question: "What is an endpoint on Amazon Neptune?",
    choices: [
      {
        text: "a fixed-sized chunk of secure, network-attached RAM"
      },
      {
        text: "a virtual database cluster volume that contains the data across all instances within the cluster"
      },
      {
        text: "a URL address and a port that points to your components"
      },
      {
        text: "a replica instance that scales read-only operations"
      }
    ],
    answers: [2],
    help: "An endpoint is simply a URL address and a port that points to your components.",
    tags: ["aws", "database"]
  },
  {
    question: "Which of the following is not a common use case for ElastiCache?",
    choices: [
      {
        text: "social networking sites"
      },
      {
        text: "real-time analytics"
      },
      {
        text: "customer relationship management systems"
      },
      {
        text: "online games"
      }
    ],
    answers: [2],
    help: "Before I finish this lecture covering ElastiCache, I want to point out some of the common use cases where you might \
    use Amazon ElastiCache. Due to its incredibly fast performance and scaling abilities, this is commonly used in the online \
    gaming industry, where it's vital that statistical information like a scoreboard is presented as quickly and as consistently \
    as possible to all the players in the game. Another common use is for social networking sites, where they need a way to \
    store temporary session information in session management. Real-time analytics is also a great use for ElastiCache, as it \
    can be used in conjunction with other services such as Amazon Kinesis to ingest, process, and analyze data at scale.",
    tags: ["aws", "database"]
  },
  {
    question: "When using Provisioned Capacity mode, how are you charged for Amazon DynamoDB?",
    choices: [
      {
        text: "by the total amount of throughput that you configure for your tables"
      },
      {
        text: "by the total amount of storage space used by your data"
      },
      {
        text: "by the amount of time your database is up and running"
      },
      {
        text: "by the total amount of throughput that you configure for your tables plus the total amount of storage space used by your data"
      }
    ],
    answers: [3],
    help: "You are charged for the total amount of throughput that you configure for your tables plus the total amount of \
    storage space used by your data.",
    tags: ["aws", "database"]
  },
  {
    question: "Amazon ElastiCache allows you to retrieve information from _____.",
    choices: [
      {
        text: "different web servers in the cloud"
      },
      {
        text: "NoSQL databases"
      },
      {
        text: "relational databases"
      },
      {
        text: "in-memory data stores"
      }
    ],
    answers: [3],
    help: "Amazon ElastiCache is a service that makes it easy to deploy, operate, and scale open-source, in-memory data stores \
    in the cloud. This service improves performance through caching, where web applications allow you to retrieve information \
    from fast, managed in-memory data stores instead of relying entirely on slower disk-based solutions.",
    tags: ["aws", "database"]
  },
  {
    question: "In Amazon RDS, what is the purpose of Multi-AZ deployment?",
    choices: [
      {
        text: "to create high availability and data redundancy"
      },
      {
        text: "to create a database with highly configurable options"
      },
      {
        text: "to prevent users from outside your VPC security group from accessing your database"
      },
      {
        text: "to enable automatic backups"
      }
    ],
    answers: [0],
    help: "If high availability and resiliency are of importance when it comes to your database, then you might want to consider \
    a feature known as Multi-AZ, which stands for multi-availability zones. When Multi-AZ is configured, a secondary RDS \
    instance is deployed within a different availability zone within the same region as the primary instance. The primary \
    purpose of the second instance is to provide a failover option for your primary RDS instance. When we have a Multi-AZ \
    deployment, it will create another standby instance in a different availability zone to create high availability and data \
    redundancy.",
    tags: ["aws", "database"]
  },
  {
    question: "What is caching?",
    choices: [
      {
        text: "a fixed-size chunk of secure, network-attached RAM"
      },
      {
        text: "ingesting, processing, and analyzing data at scale"
      },
      {
        text: "seeing and reviewing load on your database to determine if any scaling should be done"
      },
      {
        text: "storing frequently accessed information in memory to allow faster access than when requesting the information from a persistent data store"
      }
    ],
    answers: [3],
    help: "Additional memory enables our device to store frequently accessed information in memory instead of having to \
    request the information from the hard drive, which is much slower than RAM. This process is known as caching.",
    tags: ["aws", "database"]
  },
  {
    question: "Which of the following database engines is supported by Amazon RDS?",
    choices: [
      {
        text: "Amazon Aurora"
      },
      {
        text: "MySQL"
      },
      {
        text: "PostgreSQL"
      },
      {
        text: "all of these"
      }
    ],
    answers: [3],
    help: "Amazon RDS allows you to select from a range of different database engines. These currently include MySQL, MariaDB, \
    PostgreSQL, Amazon Aurora, Oracle, and SQL Server. MySQL is considered the number-one open-source relational database \
    management system. MariaDB is the community-developed fork of MySQL. The PostgreSQL database engine comes in a close second \
    behind MySQL as the preferred open source database. Amazon Aurora is AWS's own fork of MySQL, which provides ultrafast \
    processing and availability, as it has its own cloud-native database engine. The Oracle database is a common platform in \
    corporate environments. SQL Server is a Microsoft database with a number of different licensing options.",
    tags: ["aws", "database"]
  },
  {
    question: "Which Amazon RDS template uses defaults for high availability and fast and consistent performance?",
    choices: [
      {
        text: "Production"
      },
      {
        text: "Dev/Test"
      },
      {
        text: "Free Tier"
      },
      {
        text: "RDS"
      }
    ],
    answers: [0],
    help: "Now, depending on what template we select, Amazon RDS will predefine a list of other configurable components. The \
    Production template uses defaults for high availability and fast and consistent performance. The Dev/Test template is \
    intended for development use outside of a production environment. And the Free Tier is simply to allow you to get hands-on \
    experience with RDS and doesn't really use many of the features.",
    tags: ["aws", "database"]
  },
  {
    question: "Amazon Neptune is a fast, reliable, secure, and fully managed _____ service.",
    choices: [
      {
        text: "graph database"
      },
      {
        text: "SQL database"
      },
      {
        text: "caching"
      },
      {
        text: "data backup"
      }
    ],
    answers: [0],
    help: "Amazon Neptune is a fast, reliable, secure, and fully managed graph database service.",
    tags: ["aws", "database"]
  },
  {
    question: "Which of the following statements about Amazon DynamoDB is not true?",
    choices: [
      {
        text: "Reads and writes can slow down as the table gets large."
      },
      {
        text: "Data is automatically replicated across three different availability zones within a geographic region."
      },
      {
        text: "The data model can change automatically to fit your application's needs."
      },
      {
        text: "Performance is limited to the amount of read and write throughput that you've provisioned for each table."
      }
    ],
    answers: [0],
    help: "DynamoDB tables are schemaless so you don't have to define the exact data model in advance. The data model can change \
    automatically to fit your application's needs. DynamoDB is designed to be fast; reads and writes take just a few \
    milliseconds to complete and DynamoDB will be fast no matter how large your table grows, unlike a relational database, which \
    can slow down as the table gets large. DynamoDB is designed to be highly available and your data is automatically replicated \
    across three different availability zones within a geographic region. Finally, although DynamoDB performance can scale up as \
    your needs grow, your performance is limited to the amount of read and write throughput that you've provisioned for each \
    table.",
    tags: ["aws", "database"]
  },
  {
    question: "Which of the following is a type of Amazon Neptune endpoint?",
    choices: [
      {
        text: "A reader"
      },
      {
        text: "A cluster"
      },
      {
        text: "An instance"
      },
      {
        text: "All of these are Neptune endpoints."
      }
    ],
    answers: [3],
    help: "There are three different types of Amazon Neptune endpoints: cluster endpoint, reader endpoint, and instance endpoint.",
    tags: ["aws", "database"]
  },
  {
    question: "What is a node slice in Amazon Redshift?",
    choices: [
      {
        text: "a query performed on the data in your warehouse"
      },
      {
        text: "a cached copy of query results"
      },
      {
        text: "a partition of a compute node where the node's memory and disk spaces split"
      },
      {
        text: "a grouping of compute nodes"
      }
    ],
    answers: [2],
    help: "A node slice is simply a partition of a compute node where the node's memory and disk spaces split.",
    tags: ["aws", "database"]
  },
  {
    question: "What is the main difference between QLDB and blockchain?",
    choices: [
      {
        text: "In QLDB, a ledger is maintained, whereas in blockchain there is no ledger."
      },
      {
        text: "In blockchain, the ledger is distributed, whereas in QLDB, is is centralized."
      },
      {
        text: "In blockchain, a ledger is maintained, whereas in QLDB there is no ledger."
      },
      {
        text: "In QLDB, the ledger is distributed, whereas in blockchain, the ledger is centralized."
      }
    ],
    answers: [1],
    help: "This may sound similar to blockchain technology, where a ledger is also used. However, in blockchain, that \
    ledger is distributed across multiple hosts in a decentralized environment, whereas QLDB is owned and managed by a \
    central and trusted authority.",
    tags: ["aws", "database"]
  },
  {
    question: "Amazon Redshift operates as a _____ database management system.",
    choices: [
      {
        text: "graph"
      },
      {
        text: "relational"
      },
      {
        text: "object"
      },
      {
        text: "NoSQL"
      }
    ],
    answers: [1],
    help: "Redshift operates as a relational database management system, and therefore is compatible with other RDBMS applications.",
    tags: ["aws", "database"]
  },
  {
    question: "In Amazon Redshift cluster, the _____ manages communications with client programs and all communication with compute nodes.",
    choices: [
      {
        text: "client node"
      },
      {
        text: "internal network"
      },
      {
        text: "connection"
      },
      {
        text: "leader node"
      }
    ],
    answers: [3],
    help: "In Amazon Redshift cluster, the leader node manages communications with client programs and all communication \
    with compute nodes. It parses and develops execution plans to carry out database operations, in particular, the series \
    of steps necessary to obtain results for complex queries. Based on the execution plan, the leader node compiles code, \
    distributes the compiled code to the compute nodes, and assigns a portion of the data to each compute node.",
    tags: ["aws", "database"]
  },
  {
    question: "Amazon Keyspaces is compatible with _____.",
    choices: [
      {
        text: "MongoDB"
      },
      {
        text: "MySQL"
      },
      {
        text: "Firebase"
      },
      {
        text: "Apache Cassandra"
      }
    ],
    answers: [3],
    help: "Keyspaces is a serverless, fully-managed service designed to be highly scalable, highly available, and, \
    importantly, compatible with Apache Cassandra, meaning you can use all the same tools and code as you do normally \
    with your existing Apache Cassandra databases.",
    tags: ["aws", "database"]
  },
  {
    question: "In relation to Amazon QLDB, what is a database journal?",
    choices: [
      {
        text: "the immutable transaction log that records all entries in a sequenced manner over time"
      },
      {
        text: "the list of all users that are authorized to access the database"
      },
      {
        text: "the list of all users that have accessed the database"
      },
      {
        text: "the settings of your ledger, such as ID, journal size, index storage size, ARN, and region"
      }
    ],
    answers: [],
    help: "This means you can rest assured that nothing has changed or can be changed through the use of a database \
    journal, which is configured as append-only--essentially, the immutable transaction log that records all entries in \
    a sequenced manner over time.",
    tags: ["aws", "database"]
  },
  {
    question: "Which language is used to communicate with Amazon Keyspaces?",
    choices: [
      {
        text: "Python"
      },
      {
        text: "CQL"
      },
      {
        text: "SQL"
      },
      {
        text: "NoSQL"
      }
    ],
    answers: [1],
    help: "When working with Amazon Keyspaces, you'll need to use CQL, the Cassandra Query Language, which is the language \
    you use to communicate with your Amazon Keyspaces.",
    tags: ["aws", "database"]
  },
  {
    question: "When using Amazon Keyspaces, how can you run queries using CQL?",
    choices: [
      {
        text: "through the CQL editor in the Amazon Keyspaces dashboard within the AWS management console"
      },
      {
        text: "on a CQLSH client"
      },
      {
        text: "programmatically using an Apache 2 licensed Cassandra client driver"
      },
      {
        text: "all of these"
      }
    ],
    answers: [3],
    help: "There are a number of ways to run queries using CQL. Firstly, from within the Amazon Keyspaces dashboard within \
    the AWS management console, you can use the CQL editor, which can return as many as a thousand records per query. If \
    you are querying more than a thousand records, then you will need to run multiple queries together. You can run them \
    on a CQLSH client, or you can run them programmatically using an Apache 2 licensed Cassandra client driver.",
    tags: ["aws", "database"]
  },
  {
    question: "The Amazon DocumentDB replicas are responsible for _____.",
    choices: [
      {
        text: "only read operations"
      },
      {
        text: "only write operations"
      },
      {
        text: "both read and write operations"
      },
      {
        text: "neither read nor write operations"
      }
    ],
    answers: [0],
    help: "The replicas will only process read requests to the cluster volume.",
    tags: ["aws", "database"]
  },
  {
    question: "Amazon QLDB is a _____ database.",
    choices: [
      {
        text: "relational"
      },
      {
        text: "document"
      },
      {
        text: "ledger"
      },
      {
        text: "graph"
      }
    ],
    answers: [2],
    help: "What actually is Amazon QLDB? It's yet another fully managed and serverless database service, which has been \
    designed as a ledger database.",
    tags: ["aws", "database"]
  },
  {
    question: "What is transformation?",
    choices: [
      {
        text: "the process of retrieving data from one or more sources"
      },
      {
        text: "insertion of the transform data into the target database data store"
      },
      {
        text: "the process of mapping, reformatting, conforming, adding meaning, and more to prepare the data in a way that makes it more easily consumed"
      },
      {
        text: "coordination of communication between the compute nodes in your cluster and the external applications accessing your Redshift data warehouse"
      }
    ],
    answers: [2],
    help: "Transformation is the process of mapping, reformatting, conforming, adding meaning, and more to prepare the data in a way that makes it more easily consumed.",
    tags: ["aws", "database"]
  },
  {
    question: "Which type of Amazon DocumentDB endpoint allows connectivity to replicas?",
    choices: [
      {
        text: "Cluster"
      },
      {
        text: "Reader"
      },
      {
        text: "Writer"
      },
      {
        text: "Instance"
      }
    ],
    answers: [1],
    help: "A Reader endpoint allows connectivity to any read replicas that you have configured within the region.",
    tags: ["aws", "database"]
  },
  {
    question: "In Amazon DocumentDB, a cluster is composed of _____.",
    choices: [
      {
        text: "a single DB instance"
      },
      {
        text: "multiple DB instances"
      },
      {
        text: "a single or multiple DB instances"
      },
      {
        text: "exactly two read replicas"
      }
    ],
    answers: [2],
    help: "The database itself is comprised of a core component--a cluster--and this cluster is composed of a single or \
    multiple DB instances, up to 16 in total, which can span across different availability zones within a single region.",
    tags: ["aws", "database"]
  },
  {
    question: "What does Amazon Kinesis do?",
    choices: [
      {
        text: "inserts the transform data into the target database data store"
      },
      {
        text: "provisions the tables and indexes within the ledger database"
      },
      {
        text: "provides an encryption service for data security"
      },
      {
        text: "collects, processes, and analyzes real-time streaming data"
      }
    ],
    answers: [3],
    help: "Amazon Kinesis makes it easy to collect, process, and analyze real-time streaming data so you can get timely \
    insights and react quickly to new information.",
    tags: ["aws", "database"]
  },
  {
    question: "How many primary DB instances can perform write operations in a cluster at one time in Amazon DocumentDB?",
    choices: [
      {
        text: "1"
      },
      {
        text: "2"
      },
      {
        text: "3"
      },
      {
        text: "4"
      }
    ],
    answers: [0],
    help: "There will only ever be a single primary DB instance performing write operations in the cluster at any one time.",
    tags: ["aws", "database"]
  },
  {
    question: "Amazon Redshift is a fast, fully-managed, _____-scale data warehouse.",
    choices: [
      {
        text: "megabyte"
      },
      {
        text: "gigabyte"
      },
      {
        text: "terabyte"
      },
      {
        text: "petabyte"
      }
    ],
    answers: [3],
    help: "Amazon Redshift is a fast, fully-managed, petabyte-scale data warehouse.",
    tags: ["aws", "database"]
  },
  {
    question: "When using Amazon Keyspaces, any clients that want to connect to your Cassandra tables will require _____.",
    choices: [
      {
        text: "a partition key"
      },
      {
        text: "automatic scaling capacity"
      },
      {
        text: "a Transport Layer Security connection"
      },
      {
        text: "a Network Layer Security connection"
      }
    ],
    answers: [2],
    help: "When a new table is created, encryption at rest is automatically enabled, and any clients that want to \
    connect to your tables will require a Transport Layer Security connection for encrypted in-transit connectivity.",
    tags: ["aws", "database"]
  },
  {
    question: "Loading involves _____.",
    choices: [
      {
        text: "retrieving data from one or more sources"
      },
      {
        text: "inserting the transform data into the target database data store"
      },
      {
        text: "mapping, reformatting, conforming, adding meaning, and more to prepare the data in a way that makes it more easily consumed"
      },
      {
        text: "coordinating communication between the compute nodes in your cluster and the external applications accessing \
        your Redshift data warehouse"
      }
    ],
    answers: [1],
    help: "Loading involves successfully inserting the transform data into the target database data store or, in this \
    case, a data warehouse.",
    tags: ["aws", "database"]
  },
  {
    question: "With Amazon QLDB, you can rest assured that nothing has changed or can be changed through the use of a _____.",
    choices: [
      {
        text: "database journal"
      },
      {
        text: "server"
      },
      {
        text: "node slice"
      },
      {
        text: "ledger distributed across multiple hosts"
      }
    ],
    answers: [0],
    help: "This means you can rest assured that nothing has changed or can be changed through the use of a database \
    journal, which is configured as append-only.",
    tags: ["aws", "database"]
  },
  {
    question: "How often does Amazon DocumentDB create snapshots of your storage volume?",
    choices: [
      {
        text: "every 30 minutes"
      },
      {
        text: "hourly"
      },
      {
        text: "daily"
      },
      {
        text: "monthly"
      }
    ],
    answers: [2],
    help: "The automated backups themselves are performed daily. The backup retention period determines how long DocumentDB \
    will keep and maintain your backups and can be set anywhere between 0 and 35 days.",
    tags: ["aws", "database"]
  },
  {
    question: "Which of the following statements about copying Amazon RDS snapshots is false?",
    choices: [
      {
        text: "If the source snapshot that you are copying is an automated snapshot, then the target snapshot will also be classed as an automated snapshot."
      },
      {
        text: "If you copy a snapshot to a different region, then you must ensure that the target region supports cross-region snapshot copies."
      },
      {
        text: "When a snapshot is copied, neither the database option group nor the parameter group configurations will be copied."
      },
      {
        text: "You can copy your snapshots across AWS accounts."
      }
    ],
    answers: [0],
    help: "You can copy your snapshots across AWS accounts. If the source snapshot that you are copying is an automated \
    snapshot, then the target snapshot will be classed as a manual snapshot instead of automated. If you copy a snapshot \
    to a different region, then you must ensure that the target region supports cross-region snapshot copies. When a \
    snapshot is copied, then you should be aware that both the database option group and the parameter group \
    configurations will fail to be copied; instead, in the target region, the snapshot will use the defaults in that \
    region for both of these.",
    tags: ["aws", "database", "backup", "restore"]
  },
  {
    question: "In Amazon RDS, you can create your own user-initiated manual backups known as database _____.",
    choices: [
      {
        text: "backups"
      },
      {
        text: "images"
      },
      {
        text: "partitions"
      },
      {
        text: "snapshots"
      }
    ],
    answers: [3],
    help: "In addition to the automatic backups that I just explained and discussed, you can also create your own \
    user-initiated manual backups known as database snapshots.",
    tags: ["aws", "database", "backup", "restore"]
  },
  {
    question: "Which of the following statements about copying Amazon RDS snapshots is true?",
    choices: [
      {
        text: "If you copy an encrypted snapshot to a different region, you can use the same KMS key in the target region."
      },
      {
        text: "A snapshot that is taken from an encrypted database will not be encrypted."
      },
      {
        text: "If you copy a snapshot to the same region as the source snapshot, you must use a different KMS key."
      },
      {
        text: "You can choose to encrypt an unencrypted snapshot by selecting a KMS key during the copy process."
      }
    ],
    answers: [3],
    help: "If a snapshot is taken from an encrypted database, then the snapshot will also be encrypted. If you copy a \
    snapshot to the same region as the source snapshot, then you can use the same KMS key. If you copy an encrypted \
    snapshot to a different region, you will need to specify a new KMS key in the target region. You can choose to \
    encrypt an unencrypted snapshot by selecting a KMS key during the copy process.",
    tags: ["aws", "database", "backup", "restore"]
  },
  {
    question: "Which of the following statements about Amazon DynamoDB on-demand backups is false?",
    choices: [
      {
        text: "The backup process for very large databases tends to be very slow."
      },
      {
        text: "On-demand backups are not limited by the 35-day retention period."
      },
      {
        text: "You can use AWS backup to schedule on-demand backups on a regular and recurring basis."
      },
      {
        text: "Every time an on-demand backup is taken, a full backup of the entire table is included."
      }
    ],
    answers: [0],
    help: "One of the main benefits that on-demand backups have over automatic backups is that they are not limited by \
    the 35-day retention period and exist until you manually delete them. When performing your on-demand backups, you \
    should rest in the comfort that it does not pose any kind of performance throughput impact against your table, thanks \
    to a unique distributed technology that DynamoDB is built upon. This also enables your backup process to scale, which \
    means that your backups can be created in seconds despite how big your database might be in size. Now, this has the \
    benefit of requiring you not to specify backup windows or schedules. Every time an on-demand backup is taken, a full \
    backup of the entire table is included. Also, much like in RDS, you can also use AWS backup to schedule on-demand \
    backups on a regular and recurring basis.",
    tags: ["aws", "database", "backup", "restore"]
  },  
  {
    question: "Which of the following statements about Amazon RDS database restoration is false?",
    choices: [
      {
        text: "When you restore your manual snapshot, you have the option of changing the parameter group."
      },
      {
        text: "You must restore to the same storage type as the source database."
      },
      {
        text: "A database can only be restored back to a new database instance at that point in time in which the backup was taken."
      },
      {
        text: "When you restore your manual snapshot, you have the option of changing the security group."
      }
    ],
    answers: [1],
    help: "As previously mentioned, when a snapshot backup is taken, the backup is taken at that point in time and stored \
    on Amazon S3 and can only be restored back to a new database instance at that point in time at which the backup was \
    taken. If required, then during the restore process, you can actually restore to a different storage type from the \
    source database. However, due to additional processing time, the restore will take longer than simply restoring to \
    the same storage type used from the backup. When you are restoring your manual snapshot, you have the option of \
    changing both the parameter group and the security group.",
    tags: ["aws", "database", "backup", "restore"]
  },
  {
    question: "When using Amazon RDS, how many Read Replicas can you create for a given source DB Instance?",
    choices: [
      {
        text: "Only 2"
      },
      {
        text: "100"
      },
      {
        text: "Up to 10"
      },
      {
        text: "Up to 5"
      }
    ],
    answers: [3],
    help: "You can create upto 5 Read Replicas for a given source DB Instance.",
    tags: ["aws", "database", "backup", "restore"]
  },
  {
    question: "When you have enabled Multi-AZ deployment for your DB instances, Amazon enables automatic failover support. This support ensures that ______________.",
    choices: [
      {
        text: "chowhen a planned or unplanned outage of your DB instance occurs, RDS automatically switches to a standby replica in another Availability Zone.ice"
      },
      {
        text: "your primary DB instance is synchronously replicated across Availability Zones to a standby replica to provide data redundancy"
      },
      {
        text: "additional copies of your DB instance operate as a DB instance, allowing only read-only connections"
      },
      {
        text: "you can restore your DB instance to any specific time during its retention period, creating a new DB instance."
      }
    ],
    answers: [0],
    help: "The correct answer is failover support ensures that when a planned or unplanned outage of your DB instance \
    occurs, RDS automatically switches to a standby replica in another availability zone.\
    The other choices describe other options and features in RDS:\
    Automated backup feature of Multi-AZ deployment creates a standby instance that is synchronously replicated across \
    availability zones.\
    Read replicas are additional copies of your DB instance that operate as a DB instance, allowing only read-only connections.\
    Point-in-time recovery allows you to restore your DB instance to any specific time during its retention period.",
    tags: ["aws", "database", "backup", "restore"]
  },
  {
    question: "How does the Amazon RDS multi-AZ model work?",
    choices: [
      {
        text: "A second, standby database is deployed and maintained in a different region from the master using synchronous replication."
      },
      {
        text: "A second, standby database is deployed and maintained in a different availability zone from the master using asynchronous replication."
      },
      {
        text: "A second, standby database is deployed and maintained in a different region from the master using asynchronous replication."
      },
      {
        text: "A second, standby database is deployed and maintained in a different availability zone from the master, using synchronous replication."
      }
    ],
    answers: [3],
    help: "In a Multi-AZ deployment, Amazon RDS automatically provisions and maintains a synchronous standby replica in a different Availability Zone.",
    tags: ["aws", "database", "backup", "restore"]
  },
  {
    question: "Amazon RDS Read Replicas provide enhanced performance and durability for Database (DB) Instances which provide you with which of the following features? (Choose 2 answers)",
    choices: [
      {
        text: "Read replicas can serve as standby instances in case the of failover"
      },
      {
        text: "Read replicas offload read requests from the primary database"
      },
      {
        text: "Read replicas offload write requests from the primary database"
      },
      {
        text: "Read replicas can be promoted to standalone DB instances"
      }
    ],
    answers: [1,3],
    help: "Amazon RDS Read Replicas provide enhanced performance and durability for Database (DB) Instances. This replication \
    feature makes it easy to elastically scale out beyond the capacity constraints of a single DB Instance for read-heavy \
    database workloads. You can create one or more replicas of a given source DB Instance and serve high-volume application \
    read traffic from multiple copies of your data, thereby increasing aggregate read throughput. Read replicas can also \
    be promoted, so that they become standalone DB Instances.",
    tags: ["aws", "database", "backup", "restore"]
  },
  {
    question: "Which Amazon RDS database engine offers high availability with database server mirroring instead of multi-AZ deployment?",
    choices: [
      {
        text: "Oracle"
      },
      {
        text: "MySQL"
      },
      {
        text: "MariaDB"
      },
      {
        text: "Microsoft SQL Server"
      }
    ],
    answers: [3],
    help: "Microsoft SQL Server is the one database engine that offers high availability with server mirroring instead of \
    the AWS standard feature of Multi-AZ deployments.",
    tags: ["aws", "database", "backup", "restore"]
  },
  {
    question: "Which of the following statements about access to Amazon RDS Performance Insights is false?",
    choices: [
      {
        text: "Accessing Performance Insights requires appropriate permissions from the AWS Identity and Access Management service."
      },
      {
        text: "When creating IAM policies, start with a maximum set of permissions and take them away as needed."
      },
      {
        text: "As a general rule, avoid deny policies, as they can be hard to troubleshoot."
      },
      {
        text: "Attaching the AmazonRDSFullAccess policy gives the holder unrestricted access to RDS in an account."
      }
    ],
    answers: [1],
    help: "Accessing Performance Insights requires appropriate permissions from the AWS Identity and Access Management \
    service, or IAM. Attaching the AmazonRDSFullAccess policy gives the holder unrestricted access to RDS in an account. \
    As a general rule, avoid deny policies, as they can be hard to troubleshoot. When creating IAM policies, follow the \
    standard security practice of least privilege. Grant only those permissions required to perform a task. Start with a \
    minimum set of permissions and grant additional ones as needed.",
    tags: ["aws", "database", "performance"]
  },
  {
    question: "How often does Amazon RDS Performance Insights sample database connection activity in memory?",
    choices: [
      {
        text: "once per second"
      },
      {
        text: "choonce per hourice"
      },
      {
        text: "once per millisecond"
      },
      {
        text: "once per minute"
      }
    ],
    answers: [0],
    help: "Performance Insights samples database connection activity in memory once every second.",
    tags: ["aws", "database", "performance"]
  },
  {
    question: "When looking at an Amazon RDS Performance Insights graph, how can you tell whether the load displayed is large or small?",
    choices: [
      {
        text: "by zooming in"
      },
      {
        text: "by looking at the Max CPU line"
      },
      {
        text: "by zooming out"
      },
      {
        text: "by running it through Amazon CloudWatch"
      }
    ],
    answers: [1],
    help: "Looking at this graph, the next thing to figure out is whether or not the load displayed is large or small. \
    Observing this graph by itself, I can't tell whether it should be ignored or if it requires immediate attention. The \
    next step, then, is to determine how large this load is compared to the available capacity of the database instance. \
    Performance Insights has, on the load chart, a line showing the number of CPU cores on the instance. This line is \
    labeled Max CPU.",
    tags: ["aws", "database", "performance"]
  },
  {
    question: "The data collected by Amazon RDS Performance Insights about each active connection is condensed into a single value for measurement and presented as the metric \"_____\".",
    choices: [
      {
        text: "Average Active Sessions"
      },
      {
        text: "choTotal Loadice"
      },
      {
        text: "Total Activity"
      },
      {
        text: "Average Load"
      }
    ],
    answers: [0],
    help: "This data is condensed into a single value for measurement and presented as the metric \"Average Active Sessions,\" or AAS.",
    tags: ["aws", "database", "performance"]
  },
  {
    question: "Which of the following is not a filter on the interactive graph of the RDS Performance Insights dashboard?",
    choices: [
      {
        text: "user"
      },
      {
        text: "SQL"
      },
      {
        text: "wait"
      },
      {
        text: "size"
      }
    ],
    answers: [3],
    help: "The RDS Performance Insights dashboard is an interactive graph filtered by one of four attributes: SQL, user, \
    host, and wait.",
    tags: ["aws", "database", "performance"]
  },
  {
    question: "What is DynamoDB Accelerator (DAX)?",
    choices: [
      {
        text: "choDAX is a data stream analysis service that processes incoming data to your DynamoDB tables in real time.ice"
      },
      {
        text: "DAX is a managed data backup service that minimizes data loss exponentially for your applications using DynamoDB tables."
      },
      {
        text: "DAX is an in-memory cache designed to improve the read performance of your DynamoDB service."
      },
      {
        text: "DAX is a managed, high-performance computing (HPC) cluster designed to improve the write performance of your DynamoDB service."
      }
    ],
    answers: [2],
    help: "DAX is an in-memory cache delivering a significant performance enhancement, up to 10 times as fast as the \
    default DynamoDB settings, allowing response times to decrease from milliseconds to microseconds. It is a fully \
    managed feature offered by AWS and as a result, is also highly available.",
    tags: ["aws", "database", "dax"]
  },
  {
    question: "As an additional benefit, which of the following can you reduce for your DynamoDB databases when you implement DynamoDB Accelerator (DAX)?",
    choices: [
      {
        text: "The provisioned write capacity"
      },
      {
        text: "choThe read consistencyice"
      },
      {
        text: "The throughput"
      },
      {
        text: "The provisioned read capacity"
      }
    ],
    answers: [3],
    help: "If you are using provisioned mode for your DynamoDB capacity mode, you can reduce your provisioned read \
    capacity when you have implemented DAX because the cache will reduce the number of read requests your DynamoDB \
    tables receive.",
    tags: ["aws", "database", "dax"]
  },
  {
    question: "Which of the following statements about DynamoDB Accelerator (DAX) is incorrect?",
    choices: [
      {
        text: "DAX can process table operation requests, such as CreateTable or DeleteTable."
      },
      {
        text: "chDAX nodes are located with VPC subnets, while standard DynamoDB endpoints are located outside the VPC.oice"
      },
      {
        text: "Client read requests are directed to DAX first, and then DynamoDB."
      },
      {
        text: "Client write requests are written to DynamoDB first, and then DAX."
      }
    ],
    answers: [0],
    help: "If a request received by DAX from your client is a read request, such as a GetItem, BatchGetItem, Query or Scan, \
    then the DAX cluster will try and process the request if it has the data cached. If DAX does not have the request in \
    its cache (a cache miss) then the request will be sent to DynamoDB for the results to be returned to the client. \
    These results will also then be stored by DAX within its cache and distributed to the remaining read replicas in the \
    DAX cluster.\
    With regards to any write requested made by the client, the data is first written to DynamoDB before it is written to \
    the cache of the DAX cluster.\
    One final point I want to make is that DAX does not process any requests relating to table operations and management, \
    for example, if you wanted to create, update or delete tables. ",
    tags: ["aws", "database", "dax"]
  },
  {
    question: "Which step of a replication task is the initial data migration of data from the source to the target database \
    table?",
    choices: [
      {
        text: "Configure replication server"
      },
      {
        text: "Ongoing replication"
      },
      {
        text: "Applying cached changes"
      },
      {
        text: "Full load"
      }
    ],
    answers: [3],
    help: "During the full load, data is loaded from tables on the source database to tables on the target database. It's done \
    in eight tables at a time, which is the default for the tool. While the full load is in progress, changes made to the \
    tables that are being loaded are cached on the replication server. ",
    tags: ["aws", "database", "migration"]
  },
  {
    question: "The AWS Schema Conversion Tool (AWS SCT) can run a Database Migration Assessment Report that helps you understand what code conversion may be necessary for migration. What information is not provided in this report?",
    choices: [
      {
        text: "How to manually convert the objects AWS SCT cannot convert"
      },
      {
        text: "The reason AWS SCT cannot provide specific objects"
      },
      {
        text: "The number of objects AWS SCT can and cannot convert"
      },
      {
        text: "All objects that AWS SCT cannot convert"
      }
    ],
    answers: [0],
    help: "The AWS Schema Conversion Tool can run a report to help you with this part of the assessment. Once connected \
    to your source database, the conversion tool reverse engineers every object within the schema, and checks if the \
    generated code can be run against the target instance without any change being required. If it can, it will make a \
    note of this finding. If it can't, it will make a note about why it's not going to be possible. At the end, the \
    assessment will generate a report. That report is called the Database Migration Assessment Report. You can access the \
    Database Migration Assessment Report from the view menu of the conversion tool. There are two parts of the assessment \
    report, the summary part, and the actions item part. The summary page gives an overall picture of the migration possibility. \
    It shows how many objects in each type of component it can convert, and how many it can't. The action items page will \
    go deeper into the analysis. It will list every object that can't be converted to the target engine, and the reason \
    for the failure.",
    tags: ["aws", "database", "migration"]
  },
  {
    question: "Which of the following statements about AWS Database Migration Service is incorrect?",
    choices: [
      {
        text: "It supports heterogeneous and homogenous database migrations."
      },
      {
        text: "It migrates the data and objects stored in the source database to a target database."
      },
      {
        text: "It migrates the schema of the source database to the target database."
      },
      {
        text: "It supports migration between different database types, such as SQL and PostgreSQL."
      }
    ],
    answers: [2],
    help: "The service supports homogeneous migrations such as Oracle to Oracle and also heterogeneous migrations between \
    different database platforms, such as Oracle to MySQL.The service can also enable you to migrate your data from one \
    type of database to an entirely different database platform. So you might migrate your MySQL database to the AWS \
    Aurora platform or your Oracle or Microsoft SQL Server database to the Postgres platform. \
    The Database Migration Service manages the migration of your data from one database to another. The Database Migration \
    Service will only create those objects needed to perform and optimize the migration of your data. It does not manage \
    the migration of your database schema, i.e. the structure of your database. You need to have the target database \
    created first for the Database Migration Service to work. ",
    tags: ["aws", "database", "migration"]
  },
  {
    question: "Which of the following can be used with the AWS Database Migration Service to specifically modify how data is structured within a database, and allow you to migrate data from one database engine to another?",
    choices: [
      {
        text: "AWS Schema Conversion Tool"
      },
      {
        text: "AWS DataSync"
      },
      {
        text: "AWS Migration Hub"
      },
      {
        text: "AWS Glue"
      }
    ],
    answers: [0],
    help: "You can use the free AWS Schema Conversion Tool to convert an entire schema from one database engine to another. \
    The AWS Schema Conversion Tool can be used with the Database Migration Service to facilitate the migration of your \
    entire system. So the two work very well together.",
    tags: ["aws", "database", "migration"]
  },
  {
    question: "The AWS Schema Conversion Tool can assist with heterogeneous migrations. What is a heterogeneous migration?",
    choices: [
      {
        text: "Moving data from one type of database engine to another type of database engine"
      },
      {
        text: "Moving a data set made of different data types"
      },
      {
        text: "Moving data between databases with the same type of database engine"
      },
      {
        text: "Moving a data set with a single data type"
      }
    ],
    answers: [0],
    help: "Homogeneous migrations refer to when we're moving one database to another database of the same database engine \
    type. The next one is heterogeneous migrations, which is where we're moving from one type of database engine to another \
    type of database engine. So we might be migrating from an Oracle database engine to a MySQL database engine.",
    tags: ["aws", "database", "migration"]
  },
  {
    question: "Which of the following statements about AWS Secrets Manager is false?",
    choices: [
      {
        text: "It allows you to manage API keys."
      },
      {
        text: "It allows you to rotate API keys."
      },
      {
        text: "Secrets can only be created through a CloudFormation template."
      },
      {
        text: "It allows you to rotate database credentials."
      }
    ],
    answers: [2],
    help: "As a service, Secrets Manager allows you to rotate, manage, and retrieve database credentials, API keys, and \
    other secrets through their lifetime. Just like most things in AWS, it gives you the ability to manually add resources \
    such as secrets by hand in the console.",
    tags: ["aws", "database", "secret"]
  },
  {
    question: "WS Secrets Manager ensures that a secret isn’t logged or persisted by CloudFormation by using a(n) _____ to the secret.",
    choices: [
      {
        text: "static reference"
      },
      {
        text: "encrypted password"
      },
      {
        text: "dynamic reference"
      },
      {
        text: "firewall-protected key"
      }
    ],
    answers: [2],
    help: "AWS notes: “Secrets Manager ensures the secret isn’t logged or persisted by CloudFormation by using a dynamic \
    reference to the secret.",
    tags: ["aws", "database", "secret"]
  },
  {
    question: "AWS CloudFormation provides a method to create reusable _____ for common pieces of your environment.",
    choices: [
      {
        text: "templates"
      },
      {
        text: "settings"
      },
      {
        text: "algorithms"
      },
      {
        text: "configuration files"
      }
    ],
    answers: [0],
    help: "CloudFormation provides a method to create reusable, gold-standard templates for common pieces of your environment.",
    tags: ["aws", "database", "secret"]
  },
  {
    question: "Which of the following statements about AWS CloudFormation templates is false?",
    choices: [
      {
        text: "They allow you to implement security audits that detect vulnerabilities just by sending a text file to the appropriate person."
      },
      {
        text: "They give you the ability to peer review entire architectures for faults."
      },
      {
        text: "They help to prevent problems associated with automated entry and automated deployments."
      },
      {
        text: "They give you the power to document, index, version control, and manage your architecture just like code."
      }
    ],
    answers: [2],
    help: "Repeatable templates help to prevent problems associated with manual entry and ad hoc deployments. By creating \
    CloudFormation templates, you give yourself the power to document, index, version control, and manage your \
    architecture just like code. This includes the ability to peer review entire architectures for faults and implement \
    security audits that detect vulnerabilities just by sending a text file to the appropriate person. That's particularly \
    hard to do in the on-premises environment.",
    tags: ["aws", "database", "secret"]
  },
  {
    question: "AWS Secrets Manager's integration with AWS _____ allows you to manage access to your secrets with the same level of fidelity you have come to expect from AWS in general.",
    choices: [
      {
        text: "CloudFormation"
      },
      {
        text: "Redshift"
      },
      {
        text: "Identity and Access Management"
      },
      {
        text: "RDS"
      }
    ],
    answers: [2],
    help: "Secrets Manager is fully integrated with AWS’s Identity and Access Management (IAM). This allows you to manage \
    access to these secrets with the same level of fidelity you have come to expect from AWS in general.",
    tags: ["aws", "database", "secret"]
  },
  {
    question: "Which Amazon RDS storage option does AWS provide only to support backward compatibility?",
    choices: [
      {
        text: "Provisioned IOPS (SSD)"
      },
      {
        text: "Shared Cluster"
      },
      {
        text: "Magnetic"
      },
      {
        text: "General Purpose SSD"
      }
    ],
    answers: [2],
    help: "Shared Cluster storage is available only for Amazon Aurora. General Purpose SSD is a good option for a wide range of use \
    cases. Provisioned IOPS is ideal for workloads that require a high I/O. Magnetic storage is only recommended to support backward \
    compatibility.",
    tags: ["aws", "database", "pricing"]
  },
  {
    question: "Which of the following statements regarding Amazon RDS instance pricing is incorrect?",
    choices: [
      {
        text: "Each Oracle BYOL license discount applies to all Oracle DB instance types and sizes"
      },
      {
        text: "Large instances cost more than small instances"
      },
      {
        text: "Single-AZ configurations costs less than Multi-AZ configurations"
      },
      {
        text: "On-Demand instances cost more per hour than Reserved instances"
      }
    ],
    answers: [0],
    help: "Before you decide to use a BYOL license instance you need to ensure that your current license includes software update \
    license and support for the particular instance that you are looking to create.\
    Also with BYOL for Oracle you have additional editions for deployment.  This means that BYOL supports the following Oracle Editions:\
    Standard Edition\
    Standard Edition One (SE1)\
    Standard Edition Two (SE2)\
    Enterprise Edition\
    As you are only paying for the compute instances when using BYOL, there is no variation in prices between the different editions of Oracle being used.",
    tags: ["aws", "database", "pricing"]
  },
  {
    question: "Which Amazon RDS Database Engine supports the serverless purchasing option?",
    choices: [
      {
        text: "PostgreSQL"
      },
      {
        text: "MySQL"
      },
      {
        text: "Amazon Aurora"
      },
      {
        text: "SQL Server"
      }
    ],
    answers: [2],
    help: "The different payment options within RDS include on-demand instances, on-demand instances (BYOL), reserved instances, reserved instances (BYOL), and serverless.\
    Currently, only the Oracle database engine uses the BYOL purchase options, all other DB engines only use on-demand instances and \
    reserved instances, with the added exception of Aurora also using serverless as an additional purchasing option. ",
    tags: ["aws", "database", "pricing"]
  },
  {
    question: "Does increasing your backup retention period for database snapshots or taking additional database snapshots always increase your storage costs due to the backup storage consumed by your database?",
    choices: [
      {
        text: "Yes"
      },
      {
        text: "Only when the total GB of database snapshots is more than than the total GBs of active RDS databases combined on the account."
      },
      {
        text: "There is only a charge for increasing your backup retention period to longer than 90 days."
      },
      {
        text: "No"
      }
    ],
    answers: [1],
    help: "Increasing your backup retention period or taking additional database snapshots increases the backup storage space consumed \
    by your database, thus incurring additional charges.",
    tags: ["aws", "database", "pricing"]
  },
  {
    question: "Which Amazon RDS DB engine uses the BYOL DB instance purchase option?",
    choices: [
      {
        text: "Amazon Aurora"
      },
      {
        text: "Oracle"
      },
      {
        text: "MySQL"
      },
      {
        text: "PostgreSQL"
      }
    ],
    answers: [1],
    help: "The different payment options within RDS include on-demand instances, on-demand instances (BYOL), reserved instances, \
    reserved instances (BYOL), and serverless.\
    Currently, only the Oracle database engine uses the BYOL purchase options, all other DB engines only use on-demand instances and reserved instances, with the added exception of Aurora also using serverless as an additional purchasing option.",
    tags: ["aws", "database", "pricing"]
  },
  {
    question: "If your VPN device supports Border Gateway Protocol (BGP), you should specify ______ when you configure your VPN connection.",
    choices: [
      {
        text: "the customer gateway"
      },
      {
        text: "the virtual private gateway"
      },
      {
        text: "static routing"
      },
      {
        text: "dynamic routing"
      }
    ],
    answers: [3],
    help: "BGP allows inter-domain routes to happen over the Internet. If your customer gateway supports BGP, you should specify \
    dynamic routing when configuring your VPN connection. If, instead, your VPN appliance does not support this protocol, static \
    routing will be the right configuration for you.",
    tags: ["aws", "database", "vpc", "network"]
  },
  {
    question: "Network ACLs in VPCs have separate inbound and outbound rules; each rule can ______ traffic.",
    choices: [
      {
        text: "block"
      },
      {
        text: "only allow"
      },
      {
        text: "only deny"
      },
      {
        text: "either allow or deny"
      }
    ],
    answers: [3],
    help: "A network ACL has separate inbound and outbound rules, and each rule can either allow or deny traffic.",
    tags: ["aws", "database", "vpc", "network"]
  },
  {
    question: "A user has created a VPC with two subnets: one public and one private. The user is planning to run the patch update for the instances in the private subnet. How can the instances in the private subnet connect to the internet?",
    choices: [
      {
        text: "Use the internet gateway with a private IP"
      },
      {
        text: "Use a NAT Gateway with an elastic IP"
      },
      {
        text: "The private subnet can never connect to the internet"
      },
      {
        text: "Allow outbound traffic in the security group for port 80 to allow internet updates"
      }
    ],
    answers: [1],
    help: "A Virtual Private Cloud (VPC) is a virtual network dedicated to the user’s AWS account. A user can create a subnet with VPC \
    and launch instances inside that subnet. If the user has created two subnets (one private and one public), they would need a \
    Network Address Translation (NAT) gateway with the elastic IP address. This enables the instances in the private subnet to send \
    requests to the internet (for example, to perform software updates).",
    tags: ["aws", "database", "vpc", "network"]
  },
  {
    question: "When specifying a CIDR block address for your VPC, what is the range of netmasks allowed?",
    choices: [
      {
        text: "From a /8 netmask to a /30 netmask"
      },
      {
        text: "From a /20 netmask to a /28 netmask"
      },
      {
        text: "From a /16 netmask to a /28 netmask"
      },
      {
        text: "From a /16 netmask to a /24 netmask"
      }
    ],
    answers: [2],
    help: "When creating a CIDR block address range, you can select a netmask from /16 to /28, which offers roughly as many as 65,000 \
    assignable IP address within a VPC to as few as 16.",
    tags: ["aws", "database", "vpc", "network"]
  },
  {
    question: "If your VPN device does not support BGP, specify ______.",
    choices: [
      {
        text: "static routing"
      },
      {
        text: "a customer gateway"
      },
      {
        text: "a virtual private gateway"
      },
      {
        text: "dynamic routing"
      }
    ],
    answers: [0],
    help: "When you create a VPN connection, you must specify the type of routing that you plan to use, and update the route table for \
    your subnet. The type of routing that you select can depend on the make and model of your VPN devices. If your VPN device supports \
    Border Gateway Protocol (BGP), specify dynamic routing when you configure your VPN connection. If your device does not support BGP, \
    specify static routing.",
    tags: ["aws", "database", "vpc", "network"]
  },
  {
    question: "For each subnet in a VPC, five IP addresses are not assignable. AWS retains these IP addresses for specific reasons, including which of the following choices? (Choose 3 answers)",
    choices: [
      {
        text: "AWS routing"
      },
      {
        text: "AWS DNS"
      },
      {
        text: "Future use"
      },
      {
        text: "Security monitoring"
      }
    ],
    answers: [0,1,2],
    help: "In addition to the network and broadcast address of the subnet which can't be used for host addresses, AWS reserves the \
    first three host IP addresses of each subnet for internal AWS usage.",
    tags: ["aws", "database", "vpc", "network"]
  },
  {
    question: "Within a VPC, what function does an internet gateway serve?",
    choices: [
      {
        text: "To provide a target for route tables to direct Internet traffic"
      },
      {
        text: "To connect with AWS services such as Amazon"
      },
      {
        text: "To allow or restrict external traffic from entering the subnet based on a series of rules"
      },
      {
        text: "To serve as an anchor on the customer side of a VPN connection to a VPC"
      }
    ],
    answers: [0],
    help: "This Internet gateway is a managed service, controlled, configured, and maintained by AWS. It scales horizontally automatically and is classified as a highly valuable component of your VPC infrastructure.\
    The other choices describe the purposes for a public IP address, a network ACL, and a customer gateway.",
    tags: ["aws", "database", "vpc", "network"]
  },
  {
    question: "Within a VPC public subnet, what function does public IP address provide?",
    choices: [
      {
        text: "To provide a target for route tables to send traffic from the Internet"
      },
      {
        text: "To allow communication with external resources via the Internet"
      },
      {
        text: "To allow or restrict external traffic from entering the subnet based on a series of rules"
      },
      {
        text: "To serve as an anchor on the customer side of a VPN connection to a VPC"
      }
    ],
    answers: [1],
    help: "A public IP address is essentially the location for any external messages to reach resources in your VPC subnet. Without \
    it, external resources would not know how to reach you. The other choices are the services provided by internet gateways, network \
    ACLs, and customer gateways.",
    tags: ["aws", "database", "vpc", "network"]
  },
  {
    question: "Which CIDR block netmask can you assign to an Amazon VPC to provide the largest number of assignable IP addresses?",
    choices: [
      {
        text: "/8"
      },
      {
        text: "/16"
      },
      {
        text: "/28"
      },
      {
        text: "/32"
      }
    ],
    answers: [1],
    help: "The largest option Amazon VPC provides, in terms of the number of assignable IP addresses, is a /16 netmask.",
    tags: ["aws", "database", "vpc", "network"]
  },
  {
    question: "You have a VPC with a private subnet and a public subnet. How can instances in private subnet access the Internet?",
    choices: [
      {
        text: "By using a user-defined API call to the proxy server of the public subnet"
      },
      {
        text: "By using a network address translation (NAT) gateway"
      },
      {
        text: "By configuring NACL for the private subnet, and security groups for the instances within the private subnet, to allow traffic to and from the instances in the public subnet."
      },
      {
        text: "Through AWS Direct Connect"
      }
    ],
    answers: [1],
    help: "The instances in the public subnet can receive inbound traffic directly from the Internet, whereas the instances in the \
    private subnet can't. The instances in the public subnet can send outbound traffic directly to the Internet, whereas the instances \
    in the private subnet can't. Instead, the instances in the private subnet can access the Internet by using a network address \
    translation (NAT) gateway that resides in the public subnet.",
    tags: ["aws", "database", "vpc", "network"]
  },
  {
    question: "Which choice is a VPN component that serves as an AWS-managed VPC endpoint within the VPN connection?",
    choices: [
      {
        text: "virtual private gateway"
      },
      {
        text: "customer gateway"
      },
      {
        text: "internet gateway"
      },
      {
        text: "NAT gateway"
      }
    ],
    answers: [0],
    help: "The virtual private gateway is the VPN endpoint located within a VPC. It operates in a similar way to an internet gateway, and is AWS managed.",
    tags: ["aws", "database", "vpc", "network"]
  },
  {
    question: "Within AWS, what is an accurate description of a Virtual Private Cloud (VPC)?",
    choices: [
      {
        text: "An AWS user's separate network segment within the AWS cloud"
      },
      {
        text: "An AWS user's connection between two remote networks via the public internet"
      },
      {
        text: "An AWS user's connection between two remote networks via private AWS infrastructure"
      },
      {
        text: "an isolated segment of an AWS network that cannot receive inbound traffic from the internet"
      }
    ],
    answers: [0],
    help: "A Virtual Private Cloud can be described as an AWS user's network segment of the AWS cloud. The other statements describe a \
    virtual private network connection, a connection via AWS Direct Connect, and a private subnet within a VPC.",
    tags: ["aws", "database", "vpc", "network"]
  },
  {
    question: "If you want an additional layer of security within your VPC to allow or deny traffic at the subnet level, configure rules for your ______ .",
    choices: [
      {
        text: "network access control list (NACL)"
      },
      {
        text: "subnet group"
      },
      {
        text: "web application firewall (WAF)"
      },
      {
        text: "security group"
      }
    ],
    answers: [0],
    help: "Network ACLs or Access Control Lists allow you to further enhance the security of your VPC, providing you a way to control \
    both the outgoing and incoming traffic of your subnets.",
    tags: ["aws", "database", "vpc", "network"]
  },
  {
    question: "A route table can be assigned to ____________ subnet(s). A subnet can be assigned to ____________ route table(s).",
    choices: [
      {
        text: "one; one"
      },
      {
        text: "multiple; one"
      },
      {
        text: "multiple; multiple"
      },
      {
        text: "one; multiple"
      }
    ],
    answers: [1],
    help: "Every subnet has an associated route table, either implicitly or explicitly. A route table can be assigned to multiple \
    subnets, but each subnet can only associated with one route table.",
    tags: ["aws", "database", "vpc", "network"]
  },
  {
    question: "Which statements regarding VPC subnets are correct? (Choose 2 answers)",
    choices: [
      {
        text: "A route to an internet gateway means the subnet is public."
      },
      {
        text: "A route to a virtual private gateway means that the subnet is public."
      },
      {
        text: "A route to a NAT instance indicates VPN communication with on-premises servers."
      },
      {
        text: "No route to an internet gateway or virtual private gateway indicates a private subnet."
      }
    ],
    answers: [0,3],
    help: "Your VPC has an implicit router and a main route table that you can modify. Each subnet you create must be associated with \
    a route table. Adding an internet gateway and adding a route to that IGW facilitates traffic out to the Internet for a public \
    subnet. NAT instance and NAT gateways are provided to allow instances in private subnets to gain internet access. ",
    tags: ["aws", "database", "vpc", "network"]
  },
  {
    question: "You want to implement SSH forwarding to access EC2 instances. What descriptions of SSH agent forwarding are correct? (Choose 2 answers)",
    choices: [
      {
        text: "You use it to access instances through a bastion host."
      },
      {
        text: "It allows you to access private keys stored on the bastion host."
      },
      {
        text: "It stores EC2 private keys on the local client."
      },
      {
        text: "You use it to access instances through a virtual private gateway."
      }
    ],
    answers: [0,2],
    help: "SSH agent forwarding is a process that allows you to access private instances through a bastion host without storing the \
    private key within the bastion host, which could be a security risk. Instead, through SSH agent forwarding you store the private \
    keys on your local machine.",
    tags: ["aws", "database", "vpc", "network"]
  },
  {
    question: "All statements regarding VPC peering connections below are correct except:",
    choices: [
      {
        text: "You can configure a peering connection between VPCs in separate regions."
      },
      {
        text: "Peering connections are established using virtual private networks (VPN)."
      },
      {
        text: "Peering connections establish a one-to-one connection only."
      },
      {
        text: "Peering connections are not possible between VPCs with an IP address overlap."
      }
    ],
    answers: [1],
    help: "VPC peering connects two separate VPCs, either in the same region or different regions. That connection is a one-to-one \
    connection only, and cannot be established between VPCs with an IP address overlap. The connected is made over AWS infrastructure, \
    not through a Direct Connect co-location or a virtual private network (VPN). This offers high availability, and avoids a bandwidth \
    bottleneck.",
    tags: ["aws", "database", "vpc", "network"]
  },
  {
    question: "A(n) ______ in a VPC contains a set of rules that are used to determine where network traffic is directed.",
    choices: [
      {
        text: "route table"
      },
      {
        text: "security group"
      },
      {
        text: "network access control list"
      },
      {
        text: "internet gateway"
      }
    ],
    answers: [0],
    help: "A route table contains a set of rules, called routes, that are used to determine where network traffic is directed. Every subnet in your VPC must be associated with a route table.\
    Security groups and network access control lists contain rules regarding where network traffic is allowed, not where it is directed.",
    tags: ["aws", "database", "vpc", "network"]
  },
  {
    question: "Each subnet in your VPC must be associated with a _______________ that directs traffic inbound and outbound traffic for the subnet's resources.",
    choices: [
      {
        text: "route table"
      },
      {
        text: "router"
      },
      {
        text: "switch"
      },
      {
        text: "gateway table"
      }
    ],
    answers: [0],
    help: "Every subnet in your VPC must be associated with a route table. If no explicit association between a subnet and a route table is provided, an implicit relation with the main route table is created.\
    Such a table is provided by default when you create a VPC and can be easily updated as well as replaced by other custom route tables.",
    tags: ["aws", "database", "vpc", "network"]
  },
  {
    question: "Which statement regarding security groups is incorrect?",
    choices: [
      {
        text: "They operate at the instance level."
      },
      {
        text: "They support allow and deny rules for inbound and outbound traffic."
      },
      {
        text: "They evaluate all rules before deciding whether to allow traffic."
      },
      {
        text: "They can be added or removed from EC2-VPC instances at any time."
      }
    ],
    answers: [1],
    help: "Amazon VPC provides two features that you can use to increase security for your VPC:\
    Security groups—Act as a firewall for associated Amazon EC2 instances, controlling both inbound and outbound traffic at the instance level and supports allow rules only.\
    Network access control lists (ACLs)—Act as a firewall for associated subnets, controlling both inbound and outbound traffic at the subnet level and supports allow rules and deny rules.",
    tags: ["aws", "database", "vpc", "network"]
  },
  {
    question: "Which CIDR block netmask can you assign to an Amazon VPC to provide the smallest number of assignable IP addresses?",
    choices: [
      {
        text: "/8"
      },
      {
        text: "/16"
      },
      {
        text: "/28"
      },
      {
        text: "/32"
      }
    ],
    answers: [2],
    help: "The smallest option Amazon VPC provides, in terms of the number of assignable IP addresses, is a /28 netmask, which \
    creates 16 address. Taking into account the 5 that AWS uses, this actually creates 11 assignable addresses.",
    tags: ["aws", "database", "vpc", "network"]
  },
  {
    question: "Which step in configuring a bastion host is not required, and could potentially compromise your network security?",
    choices: [
      {
        text: "Create a bastion host instance in a public subnet"
      },
      {
        text: "Allow inbound SSH from a specific IP address in the bastion host security group"
      },
      {
        text: "Harden the EC2 instance"
      },
      {
        text: "Allow inbound SSH on port 80 in the bastion host security group"
      }
    ],
    answers: [3],
    help: "All of the steps are correct except for the port configuration, which is mentioned specifically in the configuration steps \
    for a bastion host. Remember, HTTP traffic can be allowed over port 80 in a security group or NACL, but SSH traffic needs to be \
    allowed on port 22.",
    tags: ["aws", "database", "vpc", "network"]
  },
  {
    question: "What does a local route within a route table enable?",
    choices: [
      {
        text: "It enables communication between VPC subnets."
      },
      {
        text: "It enables communication only within each VPC subnet, not between subnets."
      },
      {
        text: "It enables communication between a VPC and external public IP addresses."
      },
      {
        text: "It enables an administrator to SSH directly into any VPC resource."
      }
    ],
    answers: [0],
    help: "A route table is included in the VPCs default route table, and all custom route tables. It cannot be deleted, and allows \
    communication between VPC subnets.",
    tags: ["aws", "database", "vpc", "network"]
  },
  {
    question: "You want to configure a VPN connection for an Amazon VPC. Which of the following steps is required?",
    choices: [
      {
        text: "Configure an internet gateway and attach it to the VPC."
      },
      {
        text: "Configure a virtual private gateway within your on-premise network."
      },
      {
        text: "Configure a NAT gateway and attach it to a subnet within the VPC."
      },
      {
        text: "Configure a customer gateway within your on-premise network."
      }
    ],
    answers: [3],
    help: "If you wish to use Amazon VPC with a VPN connection, you or your network administrator must designate a physical appliance \
    or software as your customer gateway and configure it. ",
    tags: ["aws", "database", "vpc", "network"]
  },
  {
    question: "What type of resources can AWS Direct Connect communicate with through a private virtual interface?",
    choices: [
      {
        text: "Only resources within a VPC"
      },
      {
        text: "Only regional services"
      },
      {
        text: "Only resources within an on-premises data center"
      },
      {
        text: "Both regional services and resources within an on-premises data center"
      }
    ],
    answers: [0],
    help: "You can use a private virtual interface in AWS Direct Connect to establish a secure, private connection outside of the \
    public internet between an on-premises data center and a VPC.",
    tags: ["aws", "database", "vpc", "network"]
  },
  {
    question: "Question",
    choices: [
      {
        text: "choice"
      },
      {
        text: "choice"
      },
      {
        text: "choice"
      },
      {
        text: "choice"
      }
    ],
    answers: [],
    help: "Help",
    tags: ["aws", "database", "vpc", "network"]
  },
];

export default AllQuizes;
