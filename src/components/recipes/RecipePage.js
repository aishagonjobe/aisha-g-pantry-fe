import {Button, Col, Container, Row, FormControl, InputGroup} from "react-bootstrap";
import LoadingItem from "../loading/LoadingItem";
import NewRecipe from "./NewRecipe"
import {useState} from "react";

export default function RecipePage({recipe, getRecipePending, handleGetRecipe,
                                       handleCreateRecipe, handleUpdateRecipe, handleDeleteRecipe
                                   }) {
    return (<Container fluid>
        <Row>
            <Col>
                <h2>Pantry</h2>
            </Col>
            <Col xs={2}>
                <Row>
                    <NewRecipe handleCloseNewFood={handleCloseNewFood}
                               handleShowNewFood={handleShowNewFood}
                               show={showNewFood}
                               handleCreateFoodItem={handleCreateFoodItem}/>
                </Row>
            </Col>
        </Row>
        <Row>
            <InputGroup className="my-1">
                <FormControl
                    placeholder="Find food item"
                    aria-label="Search pantry"
                    aria-describedby="find-food-item"
                />
                <Button variant="outline-secondary">
                    Search
                </Button>
            </InputGroup>
        </Row>
        <Row>
            {
                food && !getFoodPending ? food.map((food, idx) =>
                    <FoodItemCard key={idx} food={food} favorite={favorite}
                                  handleDeleteFoodItem={handleDeleteFoodItem}
                                  handleUpdateFoodItem={handleUpdateFoodItem}
                    />) : getFoodPending && <LoadingItem/>
            }
        </Row>

    </Container>)
}