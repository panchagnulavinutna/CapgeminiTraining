import functools
def decorator_func(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        print(f"Function {func.__name__} is called")
        return func(*args, **kwargs)
    return wrapper
@decorator_func
def add(a, b):
    return a + b
print(add(1, 2))
print(add.__name__)

#class decorators
def fun(cls):
    cls.class_name = cls.__name__
    return cls
@fun
class Person:
    pass
print(Person.class_name)
