resource "random_pet" "pet" {
  keepers = {
    instance_id = var.example_instance_id
  }
}